angular.module('video-player')
  
  .component('videoPlayer', {
    
    bindings: {
      video: '<',
      autoplay: '<',
      onClick: '<'
    },
      
    templateUrl: 'src/templates/videoPlayer.html' 
  });
