angular.module('app.controllers')
.controller('splashCtrl', ['$scope','$state','Auth', function ($scope, $state,Auth) {
	  
	setTimeout(function(){
		$state.go('login');
	},5000);
	  
}]);
