const express = require('express');
const { register,login, resetPassword } =   require('../controllers/userController');


const router =  express.Router();

router.post('/register',register)
router.post('/login',login)
router.post('/user/:id/reset',resetPassword)


module.exports =  router;