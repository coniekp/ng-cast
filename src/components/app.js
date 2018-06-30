angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: ['youTube', function (youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.handleClick = (video) => {
        this.currentVideo = video;
      };
      
      this.updateVideos = (videos) => {
        this.videos = videos;
        this.selectVideo(this.videos[0]);
      };
      
      this.selectVideo = (video) => {
        this.currentVideos = video;
      };
     
      this.searchResults = (data) => {
        if(data.data){
          this.updateVideos(data.data.items);
        }
      };
      
      youTube.search('hack reactor', this.searchResults);
    }]
  });
