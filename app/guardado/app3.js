angular.module('app', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/itens', {
    templateUrl: 'views/itens.html',
    controller: 'ItensCtrl'
  })
  
  .when('item/:id', {
    templateUrl: 'views/item.html',
    controller: 'ItemCtrl'
  })

  .otherwise({redirectTo:'/'});

})


.controller('ItemCtrl', function($routeParams) {
  console.log('$routeParams.id');
})

// angular.module('asc').controller('ItensCtrl', function($routParams) {
//   console.log($routParams.id);
// })