angular.module('jobAppControllerModule', ['usersService'])

  .controller('usersController', ['$scope','usersFactory', function ($scope, usersFactory){
    
    usersFactory.getUser(function(response){
      $scope.users = response;

    });
    $scope.addUser = function() {
      $http.post('/api/users', {username: $scope.username}).success(function(){
        console.log('success');
      });
    }
  }]); 



