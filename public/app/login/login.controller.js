'use strict';

var app = angular.module("onlineCourse");

app.controller("LoginCtrl",function($scope,$location,$http, $timeout){
    $scope.alertMsg = {
        "successMsg": false,
        "errorMsg": false
    };
    $scope.displaySuccessMsg = false;
    $scope.displayErrorMsg = false;
    $scope.loginUser = {
        'username':null,
        'password':null
    };
    $scope.newUser = {
        "name":null,
        "username":null,
        "phoneNumber":null,
        "password":null
    };
    $scope.resetPassword  = {
        "username":null,
        "password":null,
        "confirmPassword":null
    };

    $scope.errorMessageDiv = 'show-message';

    $scope.toggleSignupDialog = function(status){
        $("#signup").modal(status);    
    };
    
    $scope.toggleForgotPasswordDialog = function(status){
        $("#forgotPassword").modal(status);
    };
    
    $scope.login = function(loginform){
        if(loginform.$valid){
            var baseUrl = 'http://localhost:4000/api/user/login';
            $http.post(baseUrl,$scope.loginUser).then(function (response) {
                if(response.data.status == 200){
                    $scope.alertMsg.errorMsg = false;
                    $scope.successMsg = response.data.message;
                    $scope.alertMsg.successMsg = true;
                    $timeout(function () {
                        $scope.alertMsg.successMsg = false;
                        $location.path('/courses');
                    },4500);
                } else {
                    $scope.errorMsg = response.data.message;
                    $scope.alertMsg.errorMsg = true;
                }
            },function (response) {
            });
        }
    };

    $scope.register = function (registerform) {
        var baseUrl = 'http://localhost:4000/api/user/register';
        if(registerform.$valid){
            $http.post(baseUrl,$scope.newUser).then(function (response) {
                if(response.data.status == 200){
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                }
            },function (error) {
               console.log(error);
            });
        }
    };

    $scope.forgotPassword = function (forgotPasswordform) {
        var baseUrl = 'http://localhost:4000/api/user/resetPassword';
        if (forgotPasswordform.$valid) {
            $http.post(baseUrl,$scope.resetPassword).then(function (response) {
                response = response.data;
                if(response.status == 200){
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            });
        }
    }
});
