const { Router } = require('express');
const {Operation, Op} = require ('../db')


const router = Router();



router.get('/', (req, res) =>{
    res.send('operations route')
})



module.exports = router;