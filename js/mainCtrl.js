angular.module('app')
    .controller('mainCtrl', function($scope, mainService) {
        $scope.test = 'hello';

        function getProducts() {
            mainService.getProducts()
                .then(function(response) {
                    console.log('From Main Ctrl\n', response);
                    $scope.products = response;
                }, function(error) {
                    console.log(error);
                });
        }
        getProducts();
    });
