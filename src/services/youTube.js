angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (target, callback) => {
      var options = {
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: target,
          type: 'video',
          maxResult: '5'
        }   
      };
      
      $http.get('https://www.googleapis.com/youtube/v3/search', options).then(
        function(data) {
          callback(data.data.items);
        });
    };
  });
