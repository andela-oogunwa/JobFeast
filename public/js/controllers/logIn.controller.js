angular.module('LogInModule', ['LogInService'])

  .controller('LogInController', ['$scope','LogInFactory', function ($scope, LogInFactory){
  
    $scope.addUser = function() {
    var userDetails = {
      username: $scope.username,
      password: $scope.password,
      email: $scope.email
    }
    console.log(userDetails);
      LogInFactory.signUp(userDetails)
      .success(function(data){
        console.log(data);
      })
      .error(function(error){
        console.log(error);
      });
    }
  }]); 



