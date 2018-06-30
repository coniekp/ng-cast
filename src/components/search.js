angular.module('video-player')

  .component('search', {
    
    bindings: {
      result: '<'
    },
    
    controller: ['youTube', function(youTube) {
      
      this.service = youTube;
      
      this.handleClick = () => {
        youTube.search(this.query, this.result);
      };
      
      this.handleKeyUp = () => {
        var debounced = _.debounce( () => { youTube.search(this.query, this.result); }, 500);
        debounced();
      };
    }],
    
    templateUrl: 'src/templates/search.html'
  });
