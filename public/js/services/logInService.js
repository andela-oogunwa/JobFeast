var LogInService = angular.module('LogInService',[]);

LogInService.factory('LogInFactory', ['$http', function($http) {
    return {
      signUp: function(userInfo) {
        $http.post('/api/users', userInfo);
      }

      // getUser: function() {
      //   $http.get('api/users')
      //   .success(function(data){
      //     console.log(data);
      //   })
      //   .error(function(error){
      //     console.log(error);
      //   });
      // }
    };
}]);
