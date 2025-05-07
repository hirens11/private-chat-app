angular.module('app.services').service('Data', ['$firebaseObject', '$firebaseArray', '$q',  '$state', '$rootScope', function ($firebaseObject, $firebaseArray, $q, $state, $rootScope) {

    var s = {};

    s.getSchoolsReference = function () {
        return firebase.database().ref().child(s.env+"schools");
    };

    s.getSessionsReferenceBySchool = function (schoolId) {
        return firebase.database().ref().child(s.env+"sessions").orderByChild("schoolId").equalTo(schoolId);
    };
    
    return s;
}]);

