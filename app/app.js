(function() {
  
  'use strict';

  angular.module('app',[]);

  angular.module('app').run(['$rootScope', function($rootScope) {

    require('wheelsController.js');
    require('wheelsService.js');

  }]);

})();

