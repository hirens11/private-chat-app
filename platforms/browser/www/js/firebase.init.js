angular.module('firebaseConfig', ['firebase'])

.run(function(){

	// Initialize Firebase
	var config = {
	    apiKey: "AIzaSyAtPbn2C9oVJ8VGnocRZMVvw714PBZA_CI",
	    authDomain: "hj-app-3c791.firebaseapp.com",
	    databaseURL: "https://hj-app-3c791.firebaseio.com",
	    projectId: "hj-app-3c791",
	    storageBucket: "hj-app-3c791.appspot.com",
	    messagingSenderId: "454521782429"
	  };
	  firebase.initializeApp(config);
});
