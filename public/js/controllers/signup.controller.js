angular.module('SignUpModule', ['SignUpService'])

  .controller('SignUpController', ['$scope','SignUpFactory','$location', function ($scope, SignUpFactory, $location){
  
    $scope.addUser = function() {
    var userDetails = {
      username: $scope.username,
      password: $scope.password,
      email: $scope.email
    }
    console.log(userDetails);
      SignUpFactory.signUp(userDetails)
      .success(function(data){
        console.log(data);
      })
      .error(function(error){
        console.log(error);
      });
      $location.path('../views/profile.html');
    }
  }]); 