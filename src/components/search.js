angular.module('video-player')

  .component('search', {
    
    bindings: {
      updateVideos: '<',
      result: '<'
    },
    
    controller: ['youTube', function(youTube) {
      
      this.handleClick = function() {
        youTube.search(this.query, this.result);
      };
    
    }],
    
    templateUrl: 'src/templates/search.html'
  });
