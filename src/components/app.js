angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function () {
    
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.handleClick = (video) => {
        this.currentVideo = video;
      };
      
      this.updateVideos = (videos) => {
        this.videos = videos;
        this.currentVideos = this.videos[0];
      };
    }
  

  });
