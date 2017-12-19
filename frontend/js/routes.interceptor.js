(function(){
    angular
    .module('app')
    .run(function ($log,$location) {
        event.preventDefault();
        $log.log("Run block test");        
        $location.path('/home');
        });    
});