var app = angular.module("onlineCourse");

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'app/home/home.html',
        controller:'HomeCtrl'
    });
});