var app = angular.module("onlineCourse");

app.config(function($routeProvider){
    $routeProvider.when('/login',{
        templateUrl:'app/login/login.html',
        controller:'LoginCtrl'
    });
});
