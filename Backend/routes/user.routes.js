const express = require('express');
const router = express.Router()
const { body } = require('express-validator')
const userController=require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name Must Be atleast 3 character'),
    body('password').isLength({min:3}).withMessage('Password Must be Atleast 3 chracter ')
],
userController.registerUser
)


module.exports = router;