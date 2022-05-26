const { Router } = require('express');
const {
    addUser,
    login
} = require ('./controllers/usersController')


const router = Router();

// Add new users
router.post ('/', async (req, res) =>{

    try {
        let addedUser = await addUser (req.body)
        
        res.json(addedUser)
    }
    catch (error) {
        res.json (error)
    }
})

//Login
router.post ('/login', async (req, res)=>{
    const {userName, password} = req.body;

    let token = await login (userName, password)

    if (token) {
        res.cookie('token', token, {httpOnly: true, maxAge: 1000 * 60})
        res.cookie('userName', userName, {maxAge: (1000 * 60)})
        res.json({msg: 'authenticated'})
    }
    else {
        res.sendStatus(401)
    }
})


module.exports = router;