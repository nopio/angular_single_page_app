var app = angular.module('app', ['templates', 'ui.router', 'mgcrea.ngStrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'angular/templates/main/index.html',
      controller: 'MainController'
    })
    .state('/customers', {
      url: '/customers',
      templateUrl: 'angular/templates/customers/index.html',
      controller: 'CustomersController',
    })
    .state('/customer', {
      url: '/customers/:customerId',
      templateUrl: 'angular/templates/customers/show.html',
      controller: 'CustomerController'
    })
    .state('/repair', {
      url: '/customers/:customerId/repairs/:repairId',
      templateUrl: 'angular/templates/repairs/show.html',
      controller: 'RepairController'
    });

  $urlRouterProvider.otherwise('/');
}]);
