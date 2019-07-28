var app = angular.module("onlineCourse");

app.config(function ($routeProvider) {
    $routeProvider.when('/angularjs/faq',{
       "templateUrl":"app/angularjs/angularjsFAQs/angularjs.faq.html",
        "controller":"AngularJSFAQCtrl"
    });
});
