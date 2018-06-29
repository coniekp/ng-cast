angular.module('video-player')

  .component('app', {
    controller: function () {
    
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.currentVideo = {};
      this.videos = window.exampleVideoData;
    
    },
  
  
    templateUrl: 'src/templates/app.html'
  });
