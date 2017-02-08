app.controller('ShowAllUsersController', ['$scope',function($scope) {
  $scope.userinfo=JSON.parse(localStorage.getItem("userdata")) || [];
  console.log($scope.userinfo);
  }]);
