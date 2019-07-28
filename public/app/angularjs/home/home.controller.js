var app = angular.module("onlineCourse");

app.controller("HomeCtrl",function($scope, $location){
    $scope.redirectToLink = function (link) {
        switch(link){
            case "FAQ": $location.path('angularjs/faq');
        }
    };
});

