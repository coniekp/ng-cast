angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<'
    },
    controller: function() {

      this.videos = window.exampleVideoData;
      this.onClick = () => {};
    },
    templateUrl: 'src/templates/videoList.html'
  });
