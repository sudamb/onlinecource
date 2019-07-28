var config = require('../../config.js');
var loginResponse = require('./login.response');
var controller = {};
controller.login = function (req,res) {
    config.connectToDB.then(function (db) {
        var collection = db.collection("register");
        collection.findOne({"username":req.body.username},function (userNotFoundError,checkUserNameResult) {
            if(checkUserNameResult != null){
                collection.findOne(req.body,function (userAuthError,userAuthresult) {
                    if(userAuthresult != null){
                        res.json(loginResponse(200,true,"Login Successfully"));
                    } else {
                        res.json(loginResponse(401,true,"Incorrect Username/Password"));
                    }
                });
            } else {
                res.json(loginResponse(400,null,"We dont recognize that email address, Signup for your account"));
            }
        });
    },function (err) {
        console.log(err);
    });
};

module.exports = controller;
