const { Router } = require('express');

const categoryRouter = require('./categories.js');
const userRouter = require ('./users.js')
const operatRouter = require('./operations.js');



const router = Router();




router.use('/api/categories', categoryRouter);
router.use ('api/users', userRouter )
router.use ('/api/operations', operatRouter);



module.exports = router;
