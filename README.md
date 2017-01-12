# angularjs1-btAlertMessage
AngularJS 1.x module for easy showing a nice Twitter Bootstrap alert messages...

**Example of use:**

...
 
	var app = angular.module('App', ['btAlertMessage']);
	app.controller("myController", function(btAlertMessageService,$scope){
		$scope.showMessage = function(){
			btAlertMessageService.showMessage("First message", "success");
		}
	});

...
