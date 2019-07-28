var app = angular.module("onlineCourse");

app.controller('AngularJSFAQCtrl',function ($scope,$http) {
    $scope.newQuestion = {
      "questionAskedBy":null,
      "question":null
    };

    $scope.toggleQuestionPopup = function (status) {
        $("#questionId").modal(status);
    };

    $scope.postQuestion = function (questionForm) {
        var baseUrl = 'http://localhost:4000/api/question/postQuestion';
        if(questionForm.$valid){
            $http.post(baseUrl,$scope.newQuestion).then(function (response) {
                response = response.data;
                if(response.status == 200){
                    alert(response.message);
                    $scope.toggleQuestionPopup(false);
                } else {
                    alert(response.message);
                }
            },function (response) {

            });
        }
    };

    $scope.getQuestionList = function () {
        var baseUrl = 'http://localhost:4000/api/question/getQuestion';
        $http.get(baseUrl,null).then(function (response) {
            response = response.data;
            if(response.status == 200){
                console.log(response.data);
            } else {
                alert(response.message);
            }
        },function (error) {
            alert(error);
        });
    };

    $scope.getQuestionList();
});