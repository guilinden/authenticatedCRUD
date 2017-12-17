(function(){
    angular
    .module('app')
    .config(['$routeProvider', function($routeProvider){

        $routeProvider

        .when('/',{
            templateUrl: 'templates/login.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        })


        .when('/home',{
            templateUrl: 'templates/home.html'
        })

        .when('/open_orders',{
            templateUrl: 'templates/open_orders.html',
            controller: 'openOrdersController',
            controllerAs: 'openOrdersCtrl'
        })

        .when('/closed_orders', {
            templateUrl: 'templates/closed_orders.html',
            controller: 'closedOrdersController',
            controllerAs: 'closedOrdersCtrl'
        });



    }]);

})();