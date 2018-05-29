(function() {
  'use strict';

  angular.module("app", []).controller("IndexController", function($scope) {
    $scope.titulo = "Teste2";

  var parametro:  
  $scope.selectBrand = function (nome) {
    $scope.lista = [
      {"marca": 1, "name": "BBS"},
      {"marca": 2, "name": "TSW"}
    
    ]

  } 

  });

})();

