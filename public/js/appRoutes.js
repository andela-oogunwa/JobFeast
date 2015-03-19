var routeApp = angular.module('routeApp', []);

routeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'public/views/home.html',
          controller: 'HomeController'
        }).
        when('/admin', {
          templateUrl: 'public/views/admin.html',
          controller: 'AdminController'
        }).
        when('/info', {
          templateUrl: 'public/views/info.html',
          controller: 'InfoController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);