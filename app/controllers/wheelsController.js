(function() {

    var wheelsResolve = {
        parametros : ['WheelsService', function (wheelsService) {
            return wheelsService.getAllWheels().then(function (response) {
                return response.data.data;
            });
        }], 

    }

 angular.module('asc').controller('wheelsController', ['$scope', function($scope) {
     $scope.message = 'teste';
   
}]);
    // angular.module('app').controller('wheelsController', ['$scope', 'WheelsService', function($scope, wheelsService) {
        
    // }]);
    
})();