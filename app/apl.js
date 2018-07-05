
var apl = angular.module('apl', ['ui.router']);

apl.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home.html',
            controller: 'HomeController'        
    })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutController'
    })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: 'ContactController'
        });

       

});

apl.controller('HomeController', function ($scope) {
    $scope.message = "teste";
});