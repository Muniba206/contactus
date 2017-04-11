// creating app
(function(angular) {
  
  var app = angular.module("contact",[]);

// creating form controller 

app.controller("contactCtrl", [$scope, $http, function($scope,$http){
  
    $scope.success = false;
    $scope.error = false;

  $scope.sendMessage = function( input ) {
      input.submit = true;
      $http({
          method: 'POST',
          url: 'processForm.php',
          data: angular.element.param(input),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
        }
      } );
    }
  }]);
})(angular);

  /* validating phone number
  $scope.nums = /^[1-9]{1}[0-9]{9}$/;
  $scope.submitForm = function(isValid) {
    alert("Form has been submitted")

  };
});*/
