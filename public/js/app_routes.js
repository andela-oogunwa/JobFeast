var routeApp = angular.module('routeApp', ['ngResource']);

routeApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
      when('/', {
        templateUrl: '../views/home.html',
        controller: 'HomeController'
      }).
      when('/login', {
        templateUrl: '../views/logIn.html',
        controller: 'LogInController'
      }).
      when('/home', {
        templateUrl: '../views/home.html',
        controller: 'HomeController'
      }).
      when('/profile', {
        templateUrl: '../views/profile.html',
        controller: 'ProfileController'
      }).
      otherwise({
        templateUrl: '../views/home.html'
      });


    $locationProvider.html5Mode(true);
}]);