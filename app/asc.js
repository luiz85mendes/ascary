var asc = angular.module('asc', ['ngRoute']);

asc.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {controller: 'listController', templateUrl: 'wheels.html'}).
                   when('/search', {controller: 'searchController', templateUrl: 'search.html'}). 
                   when('/edit/:name',{controller: 'editController', templateUrl: 'form.html'}).
                   when('/new', {controller: 'newController', templateUrl: 'form.html'}).otherwise({ redirectTo: '/' });
}]);

asc.run(['$rootScope', function ($rootScope) {
    $rootScope.wheels = [ "OEM", "Replics", "Classics"];
    $rootScope.brands = [
      { marca: 'OZ'},
      { marca: 'BBS'},
      { marca: 'TSW'}
    ];
    console.log('Lista de rodas!');
}]);

asc.controller('listController', function($scope) {
    console.log('lista!');
});

asc.controller('searchController', function ($scope) {
  $scope.items = [{
    id: 1,
    label: 'aLabel',
    subItem: { name: 'aSubItem' }
  }, {
    id: 2,
    label: 'bLabel',
    subItem: { name: 'bSubItem' }
  }];
});




asc.controller('editController', function ($scope, $location, $routeParams) {
  $scope.title = "editar roda";
  $scope.wheel = $routeParams.marca;
  $scope.wheelIndex = $scope.wheels.indexOf($scope.wheel);
});