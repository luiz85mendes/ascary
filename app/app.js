(function () {
    'use strict';

    var homeResolve = {
        parametros: ['HomeService', '$message', '$filter', function (homeService, $message, $filter) {
            return homeService.findAll().then(function (response) {
                var parametros = response.data.data;
                return parametros; 
            }, function (response) {
                $message.addMsgDanger(response.message);
                return [];
            });
        }],
    }

    angular.module('app', ['ui.router']);

    angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController',
            });
    });

    angular.module('app').controller('HomeController',['$scope', '$http', function ($scope, $http) {
        $scope.teste;
        $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
            $scope.teste = response.data;

        });
        $scope.message = 'teste';
       
    }]);

})();
