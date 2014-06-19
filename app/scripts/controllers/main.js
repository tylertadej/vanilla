angular.module('methodApp')
    .controller('MainCtrl', ['$scope', '$rootScope', '$location', 'vnApi',
        function ($scope, $rootScope, $location, vnApi) {
            'use strict';

//            console.log('vnApi', vnApi.Configuration().get());

            $rootScope.seo = {};

// TODO: refactor the seo state into a directive.
//            $scope.$on('$stateChangeSuccess', function (event, toState) {
//                if (toState.name === 'i18n') {
//                    $state.go('.home', null, { location: 'replace' });
//                } else if (toState.name === 'i18n.home' && $scope.config) {
//                    $rootScope.seo = angular.extend($rootScope.seo, $scope.config.seo);
//                }
//            });
            //this.getMenuItems(); // Is a call to get the categories.Was at bottom but can be prunned
//
//          // Handle Navigation
            $scope.mainNav = vnApi.Nav().get({navId: 1});

            // Handle the configuration data
            $scope.config = vnApi.Configuration().get();

//            console.log('getCart obj', vnApi.getCart().get());
            $scope.cart = vnApi.Cart().get();
//
//            this.getConfig(this.getCart);  //TODO Prune this code
//
            // TODO add function for ng-click that does this.
//            $rootScope.viewCart = function () {
//                if ($rootScope.isInDesktopMode) {
//                    return '/shoppingcart.asp';
//                } else {
//                    return '/checkout.asp';
//                }
//            };
//
              // TODO: Refactor the add to cart flow
//            // Add to Cart
//            $rootScope.$on('ADD_TO_CART', function (event, args) {
//                var pricing = args.pricing;
//                var cartItem = {
//                    id      : args.id,
//                    code    : args.code,
//                    name    : args.name,
//                    options : args.options,
//                    quantity: args.qty,
//                    pricing : {
//                        unitPrice     : pricing.salePrice > 0 ? pricing.salePrice : pricing.regularPrice,
//                        recurringPrice: pricing.recurringPrice
//                    }
//                };
//
//                api.carts.save({ cartId: $scope.cart.id || $scope.config.checkout.cartId }, cartItem)
//                    .then(function (response) {
//
//                        $scope.cart = response.data;
//                        $rootScope.$emit('ITEM_ADDED_TO_CART');
//                    });
//
//            });
        }]);