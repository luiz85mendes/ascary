app.controller('editController', function ($scope, $location, $routeParams) {
  $scope.title = "editar Fruta";
  $scope.fruit = $routeParams.name; //banana

  $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);

  $scope.save = function () {
    $scope.fruits[$scope.fruitIndex] = $scope.fruit;
    $location.path('/');
  }
});