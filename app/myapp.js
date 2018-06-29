var myapp = angular.module('myapp', ['ngRoute']);

myapp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: "pages/home.html",
       controller: "HomeController"  
    })
    .when('/about', {
        templateUrl: "pages/about.html",
        controller: "AboutController"                 
    })
    .when('/contact', {
        templateUrl: "pages/contact.html",
        controller: "ContactController"
    })

});

myapp.controller('HomeController', function ($scope) {
    $scope.message = "Home";
});

myapp.controller('AboutController', function ($scope) {
    $scope.message = "About";
});

myapp.controller('ContactController', function ($scope) {
    $scope.message = "Contact";
});


// myapp.controller('UserController', function ($scope, $routeParams) {
//     $scope.name = parseInt($routeParams.id) + parseInt($routeParams.valor);
// });