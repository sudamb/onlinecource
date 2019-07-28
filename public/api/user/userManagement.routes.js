var express = require('express');
var loginController = require('./login/login.controller.js');
var registerController = require('./register/register.controller');
var resetPasswordControlller = require('./resetPassword/resetpassword.controller');
var router = express.Router();
var config = require('../config');

router.post('/login',loginController.login);
router.post('/register',registerController.register);
router.post('/resetPassword',resetPasswordControlller.resetPassword);
module.exports = router;