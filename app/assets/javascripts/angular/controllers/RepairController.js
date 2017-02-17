var app = angular.module('app');

app.controller('RepairController', ['$scope', '$stateParams', '$http', 'Repair', function($scope, $stateParams, $http, Repair) {
  $scope.repair = {};

  function fetchRepair() {
    return Repair.show($stateParams.customerId, $stateParams.repairId).then(function(response) {
      $scope.repair = response.data;
    })
  };

  fetchRepair();
}]);
