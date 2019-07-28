var app = angular.module("onlineCourse");

app.config(function($routeProvider){
    $routeProvider.when('/angularjs/home',{
        templateUrl:'app/angularjs/home/home.html',
        controller:'HomeCtrl'
    });
});