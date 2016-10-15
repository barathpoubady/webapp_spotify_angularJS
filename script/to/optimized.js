

/**
 * @ngdoc overview
 * @name webappSpotifyAngularJsApp
 * @description
 * # webappSpotifyAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('webappSpotifyAngularJsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'spotify'
  ])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('bbf019ba26124700ab7ef6ba56587678');
    SpotifyProvider.setRedirectUri('http://example.com/callback.html');
    SpotifyProvider.setScope('playlist-read-private');
  })
  .config(function ($routeProvider) {  
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

define("app/scripts/app", function(){});

requirejs.config({
    baseUrl: 'app',
    paths: {
        "aboutCtrl":"scripts\controllers\about",
        "mainCtrl":"scripts\controllers\main",

    }
});

require(['app/scripts/app']);
define("app/scripts/config.js", function(){});

