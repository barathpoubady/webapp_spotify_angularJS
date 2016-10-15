"use strict";angular.module("webappSpotifyAngularJsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","spotify"]).config(["SpotifyProvider",function(a){a.setClientId("bbf019ba26124700ab7ef6ba56587678"),a.setRedirectUri("http://example.com/callback.html"),a.setScope("playlist-read-private")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("webappSpotifyAngularJsApp").controller("MainCtrl",["$scope","Spotify",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.searchArtist=function(){b.search(a.searchartist,"artist").then(function(b){a.artists=b.artists.items})["catch"](function(a){console.log(a)})};var c=[{name:"test"}];a.getSubCategories=function(a){return c}}]),angular.module("webappSpotifyAngularJsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("webappSpotifyAngularJsApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron" style="text-align: left"> <div ng-controller="MainCtrl"> <!--<div ng-repeat="element in album">\r\n            {{element}}\r\n        </div>--> <button ng-click="login()">Login with Spotify</button> <input type="text" ng-model="searchartist" ng-change="searchArtist()" placeholder="Search for an artist"> <ul> <li ng-repeat="artist in artists"> <a class="media" ng-href="{{artist.external_urls.spotify}}" target="_blank"> <img ng-src="{{artist.images[0].url}}" alt="" width="100%" style="max-width: 100px"> <div class="media-details"> {{artist.name}} {{artist.uri}} </div> </a> <div ng-repeat="subCategory in getSubCategories(artist.uri)"> {{subCategory.name}} </div> <!--<div ng-repeat="artistAlbum in artistAlbums">\r\n                  {{name}}\r\n              </div>--> </li> </ul> </div> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);