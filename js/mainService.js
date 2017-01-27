angular.module('app')
    .service('mainService', function($http, $q) {
        this.getProducts = function() {
            var defer = $q.defer();
            $http.get('http://practiceapi.devmounta.in/products')
                .then(function(response) {
                    defer.resolve(response.data);
                });

            return defer.promise;
        }

        this.getProductById = function(id) {
            var _defer = $q.defer();
            $http.get('http://practiceapi.devmounta.in/products/' + id)
                .then(function(response) {
                  // console.log('From Service\n', response.data);
                    _defer.resolve(response.data);
                });

            return _defer.promise;
        }
    });
