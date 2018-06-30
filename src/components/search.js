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
      this.service = youTube;
      
      this.handleKeyUp = () => {
        var debounced = _.debounce( () => { youTube.search(this.query, this.result); }, 500);
        debounced();
      };
    }],
    
  
    
    templateUrl: 'src/templates/search.html'
  });
