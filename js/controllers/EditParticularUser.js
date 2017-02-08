app.controller('EditParticularUser', ['$scope', '$routeParams','$location', function($scope,$routeParams,$location) {
  $scope.listofUsers=JSON.parse(localStorage.getItem("userdata"));
  $scope.userdata=$scope.listofUsers[$routeParams.id];
  $scope.userName=$scope.userdata.userName;
  $scope.userEmail=$scope.userdata.userEmail;
  $scope.submit=function(){
  	$scope.obj={};
    $scope.obj.userName=$scope.userName;
    $scope.obj.userEmail=$scope.userEmail;
    $scope.listofUsers[$routeParams.id]=$scope.obj;
    console.log($scope.listofUsers);
    $scope.reset();
    localStorage.setItem("userdata",JSON.stringify($scope.listofUsers));
    $location.url('/showAllUsers');
  };
  $scope.reset=function(){
  	$scope.userName="";
  	$scope.userEmail="";
  };	

}]);