(function (){

  angular.module('asc', ['ngRoute']);

  angular.module('asc').config(function($stateProvider, $urlRouteProvider, $locationProvider) {
    $urlRouteProvider.otherwise('/');

    $stateProvider
    .state('home', { 
      url: '/',
      templateUrl: 'search.html',
      controller: 'HomeController'
    })
    
  
  }]);

  

  // angular.module('asc').controller('wheelsCtrl', function ($scope) {
  //   console.log('estou no controller');
  // });

  angular.module('asc').service('wheelsSrv', function ($scope) {
    console.log('entrei no service');
  });
  require('wheelsController');
})();