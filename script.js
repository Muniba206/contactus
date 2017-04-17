// creating app
var app = angular.module("contact",[]);

// creating form controller 
app.controller("contactCtrl", function($scope){
 
  	
You can add a validation flag and show or hide errors according to its value with ng-if or ng-show in your HTML. The form has a $valid flag you can send to your controller.

ng-if will remove or recreate the element to the DOM, while ng-show will add it but won't show it (depending on the flag value).

EDIT: As pointed by Michael, if form is disabled, the way I pointed won't work because the form is never submitted. Updated the code accordingly.

HTML

<form name="searchForm" id="searchForm" ui-event="{reset: 'reset(searchForm)'}" ng-submit="search()">
  <div>
    <label>
      Area Code
      <input type="tel" name="areaCode" ng-model="areaCode" ng-pattern="/^([0-9]{3})?$/">
    </label>

    <div ng-messages="searchForm.areaCode.$error">
      <div class="error" ng-message="pattern" ng-if="searchForm.areaCode.$dirty">The area code must be three digits</div>
    </div>
  </div>

  <div>
    <label>
      Phone Number
      <input type="tel" name="phoneNumber" ng-model="phoneNumber" ng-pattern="/^([0-9]{7})?$/">
    </label>

    <div ng-messages="searchForm.phoneNumber.$error">
      <div class="error" ng-message="pattern" ng-if="searchForm.phoneNumber.$dirty">The phone number must be seven digits</div>
    </div>
  </div>

  <br>
  <div>
    <button type="reset">Reset</button>
    <button type="submit" ng-disabled="searchForm.$invalid">Search</button>
  </div>
</form>
JS

$scope.search = function() {
    alert('Searching');
};

$scope.reset = function(contactForm) {
     contactForm.$setPristine();
     contactForm.$setUntouched();
     $scope.resetCount++;
 };
  $scope.submitForm = function(isValid) {
  //  alert("Form has been submitted")

  };
});
