(function(){
    angular
    .module('app')
    .directive('navbarDirective', navbarDirective);

    function navbarDirective(){
        return {
            templateUrl: 'templates/navbar.html',
            controller: 'loginController',
            controllerAs: 'loginCtrl'
        }
    }
})()