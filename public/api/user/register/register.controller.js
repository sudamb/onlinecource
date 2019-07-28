var config = require('./../../config');
var registrationResponse = require('./register.response');
var registerController = {};

registerController.register = function (req,res) {
    config.connectToDB.then(function (db) {
        var collection =  db.collection("register");
        collection.findOne({"username":req.body.username},function (error,result) {
            if(result != null){
                res.send(registrationResponse(400,true,"Someone already use that email address"));
            } else {
                collection.insert(req.body,function (err,result) {
                    if(!err){
                        res.json(registrationResponse(200,true,"Register Successfully"));
                    } else {
                        res.json(registrationResponse(400,true,"Registration failed"));
                    }
                });
            }
        });
    },function (response) {
        console.log("Connection  failed");
    });
};

module.exports = registerController;
