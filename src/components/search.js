angular.module('video-player')

  .component('search', {
    bindings: {},
    controller: function() {
      this.result = () => {};
    },
    templateUrl: 'src/templates/search.html'
  });
