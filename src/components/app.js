angular.module('video-player')

  .component('app', {
    
    controller: ['youTube', function (youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.autoplay = true;
      
      this.handleClick = (video) => {
        this.currentVideo = video;
      };
      
      this.updateVideos = (videos) => {
        this.videos = videos;
        this.selectVideo(this.videos[0]);
      };
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
     
      this.searchResults = (data) => {
        if (data) {
          this.updateVideos(data);
        }
      };
      
      this.handleAutoplay = () => {
        this.autoplay = !this.autoplay;
        
      };
      
      youTube.search('hack reactor', this.searchResults);
    }],
    
    templateUrl: 'src/templates/app.html'

  });
