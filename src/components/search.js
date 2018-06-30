angular.module('video-player')

  .component('search', {
    bindings: {},
    controller: ['youTube',function() {
      this.result = () => {};
      
    
    }],
    templateUrl: 'src/templates/search.html'
  });
