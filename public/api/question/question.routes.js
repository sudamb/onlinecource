var express = require('express');
var questionController = require('./question.controller');
var router = express.Router();

router.post('/postQuestion',questionController.postQuestion);
router.get('/getQuestion',questionController.getQuestion);

module.exports = router;

