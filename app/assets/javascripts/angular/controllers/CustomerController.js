var app = angular.module('app');

app.controller('CustomerController', ['$scope', '$stateParams', '$http', '$modal', 'Customer', 'Repair',
  function($scope, $stateParams, $http, $modal, Customer, Repair) {
  $scope.customer = {};
  $scope.repairs = [];
  $scope.repair = {};
  $scope.new_repair = {};
  $scope.repair_statuses = {};
  $scope.repairId = null;
  $scope.query = null;

  $scope.addRepair = function() {
    createModal.$promise.then(createModal.show);
  };

  $scope.createRepair = function() {
    Repair.create($scope.customer.id, $scope.new_repair).then(function(response) {
      $scope.repairs.push(response.data);
      $scope.new_repair = {};
      createModal.hide();
    }, function(response) {
      alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
    });
  };

  $scope.editRepair = function(repair, index) {
    editModal.$promise.then(editModal.show);
    $scope.repair = angular.copy(repair);
    $scope.repairId = index;
  };

  $scope.updateRepair = function() {
    Repair.update($scope.customer.id, $scope.repair).then(function(response) {
      $scope.repairs[$scope.repairId] = response.data;
      $scope.repair = {};
      $scope.repairId = null;
      editModal.hide();
    }, function(response) {
      alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
    });
  };

  $scope.destroyRepair = function(customerId, repairId, index) {
    Repair.destroy(customerId, repairId).then(function(response) {
      $scope.repairs.splice(index, 1);
    }, function(response) {
      alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
    });
  };

  $scope.filterRepairs = function(query) {
    if($scope.query != '') {
      Repair.search($scope.customer.id, $scope.query).then(function(response) {
        $scope.repairs = response.data;
      });
    } else {
      fetchCustomer();
    }
  };

  function fetchCustomer() {
    return Customer.show($stateParams.customerId).then(function(response) {
      $scope.customer = response.data.customer;
      $scope.repairs = response.data.repairs;
      $scope.repair_statuses = response.data.repair_statuses;
    })
  };

  var createModal = $modal({
    scope: $scope,
    templateUrl: 'angular/templates/repairs/addRepairModal.html',
    show: false
  });

  var editModal = $modal({
    scope: $scope,
    templateUrl: 'angular/templates/repairs/editRepairModal.html',
    show: false
  });

  fetchCustomer();
}]);
