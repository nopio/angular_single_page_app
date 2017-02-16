var app = angular.module('app');

app.controller('CustomersController', ['$scope', 'Customer', function($scope, Customer) {
  $scope.customers = [];

  function fetchCustomers() {
    return Customer.index().then(function(response) {
      $scope.customers = response.data;
    });
  };

  fetchCustomers();
}]);
