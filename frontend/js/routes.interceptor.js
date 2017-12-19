(function(){
    angular
    .module('app')
    .run(function ($log,$location) {
        $log.log("Run block test");        
        $location.path('/home');
        });    
});