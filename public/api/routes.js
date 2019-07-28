module.exports = function (app) {
    app.use('/api/user',require('./user/userManagement.routes.js'));
    app.use('/api/question',require('./question/question.routes'));
};