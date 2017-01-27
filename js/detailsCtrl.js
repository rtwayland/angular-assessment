angular.module('app')
    .controller('detailsCtrl', function($scope, mainService, $stateParams) {
        function getProduct() {
            mainService.getProductById($stateParams.id)
                .then(function(response) {
                  $scope.product = response;
                  // console.log('Single Product\n', response);
                    // var products = response;
                    // for (var i = 0; i < producs.length; i++) {
                    //     if (producs[i].id == $stateParams.id) {
                    //         $scope.product = producs[i];
                    //     }
                    // }
                }, function(error) {
                    console.log(error);
                });
        }
        getProduct();
    });
