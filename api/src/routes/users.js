const { Router } = require('express');
const {
    addUser,
    login
} = require ('./controllers/usersController')


const router = Router();



router.get('/', (req, res) =>{
    res.send('users route')
})

router.post ('/', async (req, res) =>{

    try {
        let addedUser = await addUser (req.body)
        
        res.json(addedUser)
    }
    catch (error) {
        res.json (error)
    }
})

router.post ('/login', async (req, res)=>{
    const {userName, password} = req.body;

    let token = await login (userName, password)

    if (token) {
        res.cookie('token', token, {httpOnly: true})
        res.json({msg: 'authenticated'})
    }
    else {
        res.sendStatus(401)
    }
})


module.exports = router;