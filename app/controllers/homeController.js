(function () {
    'use strict';

    angular.module('app').controller('HomeController', ['$scope', '$http', function ($scope, $http, $state, $stateParams, $anchorScroll) {

        
        $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
            $scope.parametros = response.data;

        });

        $scope.searchWheels = function () {
            $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
                $scope.parametros = response.data;
               
              

            });
        }

    }]);

})();