
app.controller('RegisterUsersController', ['$scope',function($scope) {
  $scope.listofUsers=JSON.parse(localStorage.getItem("userdata")) || [];
  $scope.userName="";
  $scope.userEmail="";
  $scope.submit=function(){
    $scope.obj={};
    $scope.obj.userName=$scope.userName;
    $scope.obj.userEmail=$scope.userEmail;
    $scope.listofUsers.push($scope.obj);
    $scope.reset();
    
    console.log($scope.listofUsers.length);
    console.log($scope.listofUsers);
    localStorage.setItem("userdata",JSON.stringify($scope.listofUsers));
    
  };	
  $scope.reset=function(){
  	$scope.userName="";
  	$scope.userEmail="";
  };
  }]);
