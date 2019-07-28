var mongoClient = require('mongodb').MongoClient;
module.exports = {
    port:4000,
    connectToDB: new Promise(function (resolve,reject) {
        mongoClient.connect("mongodb://localhost:27017/conceptFull", function(err, db) {
            if(err){
                console.log("Failed to Connect");
                reject();
            } else {
                console.log("Login successfully");
                resolve(db)
            }
        });
    })
};