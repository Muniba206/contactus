// creating app
var app = angular.module("contact",[]);

// creating form controller 
app.controller("contactCtrl", function($scope){

  // validating phone number
  $scope.nums = /^[1-9]{1}[0-9]{7}$/;
 
  $scope.submitForm = function(isValid) {
  //  alert("Form has been submitted")

  };
});
