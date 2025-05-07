angular.module('app.controllers').controller('chatroomCtrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
	$scope.entryPopup = {show: false};
	$scope.footerBtn = "plus";
	$scope.typingMsg = function(){
		if($scope.newMsg != ''){
			$scope.footerBtn = "send";
		}else{
			$scope.footerBtn = "plus";
		}
	};
	$scope.gotopage = function(page){
		$state.go(page);
	}; 
}]);
