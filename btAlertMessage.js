"use strict";

var btAlertMessage = angular.module('btAlertMessage', []);

btAlertMessage.directive('btAlertMessage', function($rootScope) {

	// Initialize scope of this module
	$rootScope.messageText = "";
	$rootScope.messageStyle = "success";

	return {
		restrict: 'EA' // < attribute and element directive
		,template:
			'<div class="bt-alert-message">'
				+'<div ng-show="messageText != \'\'" class="alert alert-{{ messageStyle }}">'
				// +'<div ng-show="true" class="alert alert-{{ messageStyle }}">'
					+ '<h3>{{ messageText }}</h3>'
					+ '<p class="small text-right">'
						+ '<a ng-click="hideMessage()"><b>X</b> Dismiss</a>'
		            + '</p>'
		        + '</div>'
	        + '</div>'

        , link: function(scope){
        	scope.hideMessage = function(){
        		$rootScope.messageText = "";
        	}
        }
	}
});

btAlertMessage.factory('btAlertMessageService', function($rootScope) {
	return {
		/**
		* @param string Text of messsage
		* @param string Style of alert box( alert-[style] )
		**/
		showMessage : function(txt, style){
			$rootScope.messageText  = txt;
			$rootScope.messageStyle = style;
		}
		, hideMessage : function(){
			$rootScope.messageText = "";	
		}
	}
});