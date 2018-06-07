(function() {


  'use strict';
  angular.module('asc', ['ngRoute']);

  angular.module('asc').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { controller: 'wheelsController', templateUrl: 'wheels.html' }).
      when('/search', { controller: 'searchController', templateUrl: 'search.html' }).
      when('/edit/:name', { controller: 'editController', templateUrl: 'form.html' }).
      when('/new', { controller: 'newController', templateUrl: 'form.html' }).otherwise({ redirectTo: '/' });
  }]);



  
  angular.module('asc').run(['$rootScope', function ($rootScope) {
    $rootScope.wheels = ["OEM", "Replics", "Classics"];
    $rootScope.brands = [
      { marca: 'OZ' },
      { marca: 'BBS' },
      { marca: 'TSW' }
    ];
  }]);



angular.module('asc').controller('searchController', function ($scope) {

});

require('wheelsController');

})();

// asc.controller('editController', function ($scope, $location, $routeParams) {
//   $scope.title = "editar roda";
//   $scope.wheel = $routeParams.marca;
//   $scope.wheelIndex = $scope.wheels.indexOf($scope.wheel);
// });

// asc.controller('appController', function ($scope, $http) {
//   $scope.fruits = Array();

//   $scope.getData = function () {
//     $http.get("listFruits.html").success(function (data) {
//       $scope.fruits = data.fruits;
//       console.log($scope.fruits);
//     }).error(function (data) {
//       alert("Error...");
//       console.log(data);
//     })
//   }
// });
