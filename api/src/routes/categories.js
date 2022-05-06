const { Router } = require('express');
const {Category, Op} = require ('../db')


const router = Router();



router.get('/', (req, res) =>{
    res.send('categroies route')
})



module.exports = router;