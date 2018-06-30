angular.module('video-player')

  .component('search', {
    
    bindings: {
      updateVideos: '<'
    },
    
    controller: ['youTube', function(youTube) {
      this.result = (data) => {
        console.log(data.data.items);
        this.updateVideos(data.data.items);
      };
      
      this.handleClick = function() {
        youTube.search(this.query, this.result);
      };
    
    }],
    
    templateUrl: 'src/templates/search.html'
  });
