angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<'
    },
  
    controller: function () {
      this.handleClick = ()=>{};
     
    },
  
    templateUrl: 'src/templates/videoListEntry.html'
  });
