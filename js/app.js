var app = angular.module("kjack", ["firebase", "ngAudio"]);

//Controllers
app.controller("StreamCtrl", function($scope, $firebase, ngAudio) {
  // grab the current song from firebase
  var ref = new Firebase('https://kjack-dev.firebaseio.com/nowplaying');
  var sync = $firebase(ref);
  $scope.nowplaying = sync.$asObject();

  $scope.stream = ngAudio.load("http://134.114.118.89:88/broadwavehigh.mp3");

});

// supplies a "shows" object that contains all the shows
app.controller('ShowsCtrl', function($firebase) {
  var ref = new Firebase('https://kjack-dev.firebaseio.com/shows');
  var sync = $firebase(ref);
  $scope.shows = sync.$asObject();
});