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

    angular.module('app').controller('HomeController', ['$scope', '$http', '$state', '$stateParams', '$anchorScroll', function ($scope, $http, $state, $stateParams, $anchorScroll) {

        $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
            $scope.parametros = response.data;

        });

        $scope.searchWheels = function () {
            $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
                $scope.parametros = response.data;
                $location.hash('anchor');
                $anchorScroll();

            });
        }

    }]);

})();
