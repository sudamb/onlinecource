var app = angular.module("onlineCourse");

app.config(function ($routeProvider) {
    $routeProvider.when('/courses',{
        templateUrl:'app/allCourse/allCourse.html',
        controller:'allCourseController'
    })
});