var routeApp = angular.module('routeApp', []);

routeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'public/views/home.html',
          controller: 'HomeController'
        }).
        when('/logIn', {
          templateUrl: 'public/views/logIn.html',
          controller: 'AdminController'
        }).
        when('/admin', {
          templateUrl: 'public/views/admin.html',
          controller: 'InfoController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);