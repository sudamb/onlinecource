var app = angular.module("onlineCourse");

app.controller("allCourseController",function ($scope,$location) {
    $scope.redirectToLink = function () {
        $location.path('angularjs/home');
    };
});



