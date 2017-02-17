var app = angular.module('app');

app.controller('CustomerController', ['$scope', '$stateParams', '$http', 'Customer', function($scope, $stateParams, $http, Customer) {
  $scope.customer = {};

  function fetchCustomer() {
    return Customer.show($stateParams.customerId).then(function(response) {
      $scope.customer = response.data;
    })
  }

  fetchCustomer();
}]);
