(function(){
    angular
    .module('app')
    .config(router);

    function router($stateProvider,$urlRouterProvider){

            $stateProvider

            .state('login',{
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginController',
                controllerAs: 'loginCtrl',
                data: {
                    requireLogin: false
                }
            })


            .state('home',{
                url: '/home',
                templateUrl: 'templates/home.html',
                data: {
                    requireLogin: true
                }
            })

            .state('open_orders',{
                url: '/open_orders',
                templateUrl: 'templates/open_orders.html',
                controller: 'openOrdersController',
                controllerAs: 'openOrdersCtrl',
                data: {
                    requireLogin: true
                }
            })

            .state('closed_orders', {
                url: '/closed_orders',
                templateUrl: 'templates/closed_orders.html',
                controller: 'closedOrdersController',
                controllerAs: 'closedOrdersCtrl',
                data: {
                    requireLogin: true
                }
            });


           $urlRouterProvider.otherwise("/login");
        };
    

})();