angular.module('starter.services', ['ngCordova'])

.factory('Posts', function($http) {
    return {
      getPosts: function() {
            return $http.get('js/testingPosts.json');
            //return $http.get('http://banana-cobbler-6505.herokuapp.com/api/v1/listings.json');
        }
    };
  })

/** factory for camera.. pic will be stored here
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])
**/

;
