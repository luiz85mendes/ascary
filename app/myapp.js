var app = angular.module('myapp', ['ngRoute']);

// Definindo Rotas
app.config(function($routeProvider) {
  $routeProvider.when("/users/:id", {
      template:"<h1>Hello {{name}} </h1>",
      controller: "UserController"
    })
    .otherwise({redirectTo: '/'});
});

app.controller('UserController', function ($scope, $routeParams) {
    $scope.name = $routeParams.id;
    //console.log($scope.name);
});