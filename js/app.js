var app = angular.module('RegisterApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/register', { 
      controller: 'RegisterUsersController', 
      templateUrl: 'views/RegisterUsers.html' 
    }) 
  .when('/showAllUsers', { 
      controller: 'ShowAllUsersController', 
      templateUrl: 'views/ShowAllUsers.html' 
    })
  .when('/user/:id',{
    controller: 'EditParticularUser', 
    templateUrl:'views/EditParticularUser.html' 

  })
  .otherwise({ 
      redirectTo:'/register' 
    }); 
});
