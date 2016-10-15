'use strict';

/**
 * @ngdoc function
 * @name webappSpotifyAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappSpotifyAngularJsApp
 */
angular.module('webappSpotifyAngularJsApp')
  .controller('MainCtrl', function ($scope, Spotify) {
    this.awesomeThings = [
      'HTML5 Boilerplate', 
      'AngularJS', 
      'Karma'
    ];
    
    $scope.searchArtist = function () {
      Spotify.search($scope.searchartist, 'artist').then(function (data) {
        $scope.artists = data.artists.items;

       // console.log(angular.toJson(data.artists.items));       

        //console.log(angular.toJson(data.artists.items[1].uri) );
      /*  var log = [];
        var values = [];
        angular.forEach(data.artists.items, function(value, key) {
          
             Spotify.getArtistAlbums(value.uri).then(function (data) {
              //  console.log('=================== Artist Albums - Spotify URI ===================');
              //  console.log(data);
               // values.push(data.items); 
                
                 //$scope.artistAlbums = values;
                 $scope.artistAlbums.push(data.items);
                 console.log('=================== Artist Albums - Spotify URI ===================');
                 console.log($scope.artistAlbums);
                 /*$scope.albumsTracks = Spotify.getAlbumTracks(data.uri).then(function (data){
                    
                    console.log(data);

                });

              });
          }, log);*/
          
      //  $scope.artistAlbums
        
      }).catch(function(error) {
          
          console.log(error);
          
      });

    };
    
     var artistAlbums = [{name:'test'}];

    $scope.getSubCategories = function(artistUri){

         //Spotify.getArtistAlbums(artistUri, 1).then(function (data) {

             //console.log(artistUri);
         //    console.log(data.name); 
            // artistAlbums = data.name;

        // });

        /* var result = [];
         for(var i = 0 ; i < $scope.model.subCategories.length ; i++){
             if(parentId === $scope.model.subCategories[i].parentId){
                 result.push($scope.model.subCategories[i]);               
             }
         }
         console.log(parentId)
         return result;*/
        return artistAlbums;
     };
    
  /*  Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
        
        $scope.album = angular.toJson(data, true); 
        
        console.log(angular.toJson(data, true)); 
    });*/
    
  });
