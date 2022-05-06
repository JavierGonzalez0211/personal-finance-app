const { Router } = require('express');

const categoryRouter = require('./categories.js');
const operatRouter = require('./operations.js');
const testRouter = require('./test.js');
const userRouter = require('./users.js');



const router = Router();




router.use('/api/categories', categoryRouter);
router.use ('/api/operations', operatRouter);
router.use ('/api/users', userRouter);



module.exports = router;
