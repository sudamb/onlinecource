var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var config = require('./public/api/config.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.get("*",function(req,res,next){
    res.sendFile(__dirname + '/public/index.html');
});
require('./public/api/routes.js')(app);
app.listen(config.port);
console.log("Listening on port " + config.port);
