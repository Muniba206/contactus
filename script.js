// creating app
var app = angular.module("contactForm",[]);

// creating form controller 

app.controller("formCtrl", function($scope){

  // validating phone number
  $scope.nums = /^[1-9]{1}[0-9]{9}$/;
  $scope.submitForm = function(isValid) {
    alert("Form has been submitted")

  };
});
