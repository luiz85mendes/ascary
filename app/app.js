var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', { controller: 'listController', templateUrl: 'search.html', resolve: { Lista: } }).
    when('/edit/:name', { controller: 'editController', templateUrl: 'form.html' }).
    when('/new', { controller: 'newController', templateUrl: 'form.html' }).otherwise({ redirectTo: '/' });
}]);


app.run(['$rootScope', function ($rootScope) {
  $rootScope.fruits = ["banana", "apple", "orange"]; //Variável fruits possui contexto global ao módulo.
  console.log('app.run');


}]);

app.controller('listController', function($scope) {
  console.log('bateu aqui');
});
















app.controller('listController', function ($scope) {
  console.log('listController');

});

app.controller('editController', function ($scope, $location, $routeParams) {
  $scope.title = "editar Fruta";
  $scope.fruit = $routeParams.name; //banana

  $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

  $scope.save = function () {
    $scope.fruits[$scope.fruitIndex] = $scope.fruit;
    $location.path('/');
  }
});

app.controller('newController', function ($scope, $location, $routParams) {
  $scope.fruits.push($scope.fruit);
  $location.path('/');
});



