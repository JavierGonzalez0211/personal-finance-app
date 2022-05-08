const { Router } = require('express');
const {verifyAuth} = require ('./controllers/usersController')

const router = Router();



router.get('/', verifyAuth, (req, res) =>{
    res.send('operations route')
})



module.exports = router;