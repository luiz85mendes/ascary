(function () {
    'use strict';

    angular.module('app').controller('HomeController', ['$scope', '$http',  '$state', '$stateParams', '$anchorScroll',  function ($scope, $http, $state, $stateParams, $anchorScroll) {

      $scope.menu = "Buscar";
      $scope.parametros = [];
        
        $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
            $scope.parametros = response.data;
            console.log($scope.parametros);
           
        });

        $scope.searchWheels = function () {
            $http.get('http://localhost:8080/wheels/buscar').then(function (response) {
                $scope.para = response.data;
               
            });
        }

        $scope.items = [{
            id: 1,
            label: 'aLabel',
            subItem: { name: 'aSubItem' }
          }, {
            id: 2,
            label: 'bLabel',
            subItem: { name: 'bSubItem' }
          }];

    }]);

})();