(function () {
    'use strict';

    angular.module('app').controller('HomeController', ['$scope', '$http',  '$state', '$stateParams', '$anchorScroll',  function ($scope, $http, $state, $stateParams, $anchorScroll) {

    $scope.menu = "Buscar";
    
        
        $http.get('http://localhost:8080/wheels/carregar').then(function (response) {
            $scope.parametros = response.data;
            
           
        });

        $scope.searchWheels = function (filtro) {
            $http.get('http://localhost:8080/wheels/buscar/' + filtro).then(function (response) {
                $scope.lista = response.data;
                console.log($scope.lista);
               
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