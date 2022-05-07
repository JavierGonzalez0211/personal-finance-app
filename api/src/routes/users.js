const { Router } = require('express');
const {addUser} = require ('./controllers/usersController')


const router = Router();



router.get('/', (req, res) =>{
    res.send('users route')
})

router.post ('/', async (req, res) =>{
    
    try {
        let newUser = await addUser (req.body)
        res.json(newUser)
    }
    catch (error) {
        res.json (error)
    }
})



module.exports = router;