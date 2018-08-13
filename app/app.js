(function () {
    'use strict';

    angular.module('app', ['ui.router']);

    angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController',
            resolve: {
              
            }
        }).state('search', {
            url: '/search',
            templateUrl: 'search.html',
            controller: 'HomeController',
        });


    });

    angular.module('app').controller('Principal', ['$scope', '$http', function ($scope, $http) {
        $scope.principal = "pagina principal";

    }]);
    

})();
