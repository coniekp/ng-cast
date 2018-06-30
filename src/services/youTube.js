angular.module('video-player')
  .service('youTube', function($http) {
    this.search = () => {
      var options = {
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: 'cats',
          type: 'video',
          maxResult: '5'
        }   
      };
      
      
      $http.get('https://www.googleapis.com/youtube/v3/search', options).then(
        function(data){
          console.log(data);
        });
    };
    this.search();
    console.log("hello");
  });
