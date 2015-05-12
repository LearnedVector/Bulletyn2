angular.module('starter.controllers', ['ngCordova'])

/**Config to whitelist camera
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
**/

.controller('MainCtrl', ['$scope', function($scope) {}])

/**ngCordova Camera Controller
.controller('CameraCtrl', function($scope, Camera) {

  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
  };

})
**/

.controller('BrowseCtrl', function($scope) {})

.controller('FeaturedCtrl', function($scope, Posts) {
  $scope.posts = null;

    var handleSuccess = function(data, status) {
        $scope.posts = data;
    };
    var handleError = function(data, status) {
        console.log("error getting posts");
        console.log(data);
    };

    Posts.getPosts().success(handleSuccess).error(handleError);
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts) {
    $scope.post = null;

    var handleSuccess = function(data, status) {
        for (var i = 0; i < data.length; i++) {
             console.log(data[i].id);
          if (data[i].id === $stateParams.postId) {
             $scope.post = data[i];
          }
        }
    };
    var handleError = function(data, status) {
        console.log("error getting posts" );
        console.log(data);
    };

    Posts.getPosts().success(handleSuccess).error(handleError);

})
// Picture controller in the detail page
.controller('PicsCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {

  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }

  $ionicModal.fromTemplateUrl('templates/browse/image-popover.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function(modal) {
      $scope.modal = modal;
  })

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {

  });
});


;
