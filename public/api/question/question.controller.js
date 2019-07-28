var config = require('../config');
var questionResponse = require('./question.response');

var questionController = {
    postQuestion: function (req,res) {
        config.connectToDB.then(function (db) {
            var collection = db.collection("question");
            collection.insertOne({
                "questionAskedBy":req.body.questionAskedBy,
                "question":req.body.question,
                "commentBy":null,
                "comment":null
            },function (dbInsertError,dbInsertResult) {
                if(dbInsertError){
                    res.json(questionResponse(400,true,"Question added failed, Please try again"));
                } else {
                    res.json(questionResponse(200,true,"Question Added Successfully"));
                }
            })
        },function () {
        })
    },

    getQuestion: function (req,res) {
        config.connectToDB.then(function (db) {
            var collection = db.collection("question");
            var questionList = collection.find();
            if(questionList != null){
                questionList.each(function (err,docs) {
                    if(docs != null){
                        console.log(docs);
                        res.json(questionResponse(200,docs,"Question Added Successfully"));
                    }
                });
            }


        });
    }
};

module.exports = questionController;
