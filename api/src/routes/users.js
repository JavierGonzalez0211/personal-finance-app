const { Router } = require('express');
const {User, Op} = require ('../db')


const router = Router();



router.get('/', (req, res) =>{
    res.send('users route')
})



module.exports = router;