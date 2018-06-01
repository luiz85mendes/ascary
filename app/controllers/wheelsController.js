(function() {

    var wheelsResolve = {
        parametros : ['WheelsService', function (wheelsService) {
            return wheelsService.getAllWheels().then(function (response) {
                return response.data.data;
            });
        }], 

    }

  
    angular.module('app').controller('WheelsController', ['$scope', 'WheelsService', function($scope, wheelsService) {

    }]);
    
})();