var app = angular.module('app');

app.service('Customer', ['$http', function($http) {
  var base_url = '/customers'

  this.index = function() {
    return $http.get(base_url + '.json');
  };

  this.show = function(customerId) {
    return $http.get(base_url + '/' +  customerId  + '.json')
  };

  this.destroy = function(customerId) {
    return $http.delete(base_url + '/' + customerId + '.json')
  };

  this.create = function(customer) {
    return $http.post(base_url + '.json', {
      customer: customer
    });
  };

  this.update = function(customer) {
    return $http.put(base_url + '/' + customer.id + '.json', {
      customer: customer
    });
  };

  this.search = function(query) {
    return $http.get(base_url + '/search.json', {
      params: {
        query: query
      }
    });
  };
}]);
