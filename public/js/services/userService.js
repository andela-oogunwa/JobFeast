var userService = angular.module('usersService',[]);

userService.factory('usersFactory', ['$http', function($http) {
    return {
      getUser : function(callback) {
        $http.get('/api/users')
        .success(callback)
        .error(function(error){
          console.log(error);
        });
      }
    };
}]);