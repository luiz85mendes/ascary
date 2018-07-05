var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController'
        });
});

app.controller('HomeController', function ($scope) {
    $scope.message = "teste";
});

app.service('HomeService')