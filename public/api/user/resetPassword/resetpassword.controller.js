var config = require('../../config');
var resetPasswordResponse = require('./resetpassword.response');

var resetPasswordController = {
    resetPassword : function (req,res) {
        config.connectToDB.then(function (db) {
            var collection = db.collection("register");
            collection.findOne({"username": req.body.username},function (findUsernameResponseError,findUsernameResult) {
                if(findUsernameResult != null){
                    collection.updateOne({"username": req.body.username},{$set:{"password":req.body.password}},function (updatePasswordError,updatePasswordResult) {
                        if(updatePasswordResult != null){
                            res.send(resetPasswordResponse(200,true,"Password reset successfully"));
                        }
                    });
                }else {
                    res.send(resetPasswordResponse(404,false,"Email address is not an our database, Please recheck and enter again"));
                }
            });
        },function (dbError) {

        });
    }
};

module.exports = resetPasswordController;