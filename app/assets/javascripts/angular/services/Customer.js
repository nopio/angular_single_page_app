var app = angular.module('app');

app.service('Customer', ['$http', function($http) {
  var base_url = '/customers'

  this.index = function() {
    return $http.get(base_url + '.json');
  };

  this.show = function(customerId) {
    return $http.get(base_url + '/' +  customerId  + '.json')
  }
}]);
