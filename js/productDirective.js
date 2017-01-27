angular.module('app')
    .directive('product', function() {
      return {
          restrict: 'E',
          templateUrl: './views/product-tmpl.html',
          scope: {
            product: '='
          },
          link: function(scope, elem, attrs) {
          }
      };
    });
