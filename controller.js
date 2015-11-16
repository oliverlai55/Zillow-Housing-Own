var houseCtl = angular.module('myApp', []);
myApp.controller('mainController', function($scope, $http) {
	
	$scope.relatedVids = otherVideos;
	singleVideoUrl = 'https://www.googleapis.com/youtube/v3/search?relatedToVideoId=0a33WTZK2zI&part=snippet&type=video&maxResults=10&key=AIzaSyB2_xXL68_ejdpXl5smjhuY3Sx2D888Zn4';
	$http.get(singleVideoUrl).success(function(data) {
         $scope.relatedVids = data.items;
         console.log(data.items);
       });
	// $http.get({
	// 	url: 'https://www.googleapis.com/youtube/v3/search?relatedToVideoId=0a33WTZK2zI&part=snippet&type=video&key=AIzaSyB2_xXL68_ejdpXl5smjhuY3Sx2D888Zn4'
	// });
});