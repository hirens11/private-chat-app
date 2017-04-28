angular.module('app.controllers', [])

  .controller('menuCtrl', ['$scope', '$stateParams', 'Auth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller

    function ($scope, $stateParams, Auth, $state) {

      $scope.menuShowing = false;


      if (Auth.getUser() == null) {
        $state.go("login");
        return;
      }
      $scope.user = Auth.getUser();
      $scope.userName = Auth.getUserNameByUid($scope.user.uid);
      $scope.userProfile = Auth.getUserImageByUid($scope.user.uid);
      console.log($scope.user + " " + $scope.userName + "  " + $scope.userProfile);
      $scope.logout = function () {
        firebase.auth().signOut().then(function () {
        }, function (error) {

          console.log(error);
        });
      };

      $scope.toggleMenu = function(){
        $scope.menuShowing = !$scope.menuShowing ;
      };
    }]);

