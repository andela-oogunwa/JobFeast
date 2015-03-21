var routeApp = angular.module('routeApp', []);

routeApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/login', {
        templateUrl: '../views/logIn.html',
        controller: 'LogInController'
      }).
      when('/home', {
        templateUrl: '../views/home.html',
        controller: 'HomeController'
      }).
      when('/admin', {
        templateUrl: '../views/admin.html',
        controller: 'AdminController'
      }).
      otherwise({
        templateUrl: '../views/home.html'
      });


    $locationProvider.html5Mode(true);
}]);