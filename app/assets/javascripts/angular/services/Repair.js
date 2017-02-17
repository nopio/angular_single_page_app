var app = angular.module('app');

app.service('Repair', ['$http', function($http) {
  this.show = function(customerId, repairId) {
    return $http.get('/customers/' + customerId + '/repairs/' + repairId + '.json');
  };

  this.create = function(customerId, repair) {
    return $http.post('/customers/' + customerId + '/repairs.json', {
      repair: repair
    });
  };

  this.update = function(customerId, repair) {
    return $http.put('/customers/' + customerId + '/repairs/' + repair.id + '.json', {
      repair: repair
    });
  };

  this.destroy = function(customerId, repairId) {
    return $http.delete('/customers/' + customerId + '/repairs/' + repairId + '.json');
  };

  this.search = function(customerId, query) {
    return $http.get('/customers/' + customerId + '/repairs/search.json', {
      params: {
        query: query
      }
    });
  };
}]);
