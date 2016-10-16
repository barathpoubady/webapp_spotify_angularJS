require.config({
    baseUrl: '../../',
    paths: {

        'app':'scripts/app',

        //bower modules
        'jquery':'bower_components/jquery/dist/jquery',
        'angular':'bower_components/angular/angular',
        'angularSpotify':'bower_components/angular-spotify/dist/angular-spotify.min',
        'bootstrap':'bower_components/bootstrap/dist/js/bootstrap',
        'ngRoute':'bower_components/angular-route/angular-route',
        'spotify':'bower_components/angular-spotify/dist/angular-spotify.min',

  /* <script src='bower_components/jquery/dist/jquery.js'></script>
    <script src='bower_components/angular/angular.js'></script>
    <script src='bower_components/bootstrap/dist/js/bootstrap.js'></script>
    <script src='bower_components/angular-animate/angular-animate.js'></script>
    <script src='bower_components/angular-aria/angular-aria.js'></script>
    <script src='bower_components/angular-cookies/angular-cookies.js'></script>
    <script src='bower_components/angular-messages/angular-messages.js'></script>
    <script src='bower_components/angular-resource/angular-resource.js'></script>
    <script src='bower_components/angular-route/angular-route.js'></script>
    <script src='bower_components/angular-sanitize/angular-sanitize.js'></script>
    <script src='bower_components/angular-touch/angular-touch.js'></script>
    <script src='bower_components/angular-spotify/dist/angular-spotify.min.js'></script>*/

        //controller
        'aboutCtrl':'scripts/controllers/about',
        'mainCtrl':'scripts/controllers/main'

    },

    shim:  {

        'angular': {
            deps: ['jquery']
        },
        'app': {
            deps: ['angular', 'spotify', 'bootstrap']
        },
        'bootstrap' : {
                 deps: ['jquery']
        }

    }
});

require(['app'], function(){
    'use strict';
    angular.bootstrap(document, ['app']);
});