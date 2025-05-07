angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'pages/login.html',
                controller: 'loginCtrl'
            })
            .state('splash', {
                url: '/splash',
                templateUrl: 'pages/splash.html',
                controller: 'splashCtrl'
            })
		    .state('chatroom', {
		        url: '/chatroom',
		        templateUrl: 'pages/chatroom.html',
		        controller: 'chatroomCtrl'
		    });

        $urlRouterProvider.otherwise('/splash')
    });
