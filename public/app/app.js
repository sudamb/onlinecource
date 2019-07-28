var app = angular.module("onlineCourse",['ngRoute','ngCookies','ngResource','ui.bootstrap']);

app.config(function($routeProvider,$locationProvider){
    $routeProvider.otherwise({
        redirectTo: '/'
    });
      $locationProvider.html5Mode({
          enabled:true,
          requireBase:false
      });
});

app.controller('GlobalCtrl',function($scope){
    console.log("Global controller");
});
