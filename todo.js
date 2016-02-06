/* global angular */
angular.module('todoApp', ['youtube-embed'])
  .controller('TodoListController', function ($scope, $http) {
    $scope.dataSearch = null
    $scope.state = 1
    $scope.myVideo = []
    $scope.detailVideo = []
    $scope.playerVars = {
      controls: 1,
      autoplay: 1
    }

    $scope.addVideo = function (key, img, title) {
      $scope.myVideo.push(key)
      $scope.detailVideo.push({
        'img': img,
        'title': title
      })
    }

    $scope.deleteVideo = function (index) {
      $scope.myVideo.splice(index, 1)
      $scope.detailVideo.splice(index, 1)
    }

    $scope.$on('youtube.player.ended', function ($event, player) {
      $scope.myVideo.shift()
      $scope.detailVideo.shift()
      player.playVideo()
    })

    $scope.search = function (keyword) {
      $scope.state = 2
      $http({
        method: 'GET',
        url: '/search?keyword=' + keyword
      }).then(function successCallback (response) {
        console.log(response)
        $scope.dataSearch = response.data
      }, function errorCallback (response) {
        console.log(response)
      })
    }

  })
