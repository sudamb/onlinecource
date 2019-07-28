var resetPasswordResponse = function (status,data,message) {
    return{
        "status":status,
        "data":data,
        "message":message
    };
};

module.exports = resetPasswordResponse;