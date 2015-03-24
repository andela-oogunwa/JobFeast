var LogInService = angular.module('LogInService',[]);

LogInService.factory('LogInFactory', ['$http', function($http) {
    return {
      signUp: function(userInfo) {
        return $http.post('/api/users', userInfo);
      }
    };
}]);