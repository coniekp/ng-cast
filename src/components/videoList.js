angular.module('video-player')

  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<',
      clickHandler: '<'
    },
    controller: function() {
      this.onClick = (video) => {
        this.clickHandler(video);
        // this.currentVideo = e;
      };
    }
  
  });
