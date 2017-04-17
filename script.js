// creating app
var app = angular.module("contact",[]);

// creating form controller 
app.controller("contactCtrl", function($scope){
 
    $scope.reset = function() {
    $scope.list = {};
}
  $scope.submitForm = function(isValid) {
  //  alert("Form has been submitted")

  };
});
