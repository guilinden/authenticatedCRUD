(function(){
    angular
    .module('app')
    .run(routeWatcher)
        
        function routeWatcher($rootScope,$location,users,$log,$cookies) {

            var vm = this;
        
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            var token = $cookies.get('token');
            
            users.check_user();
            
            if(requireLogin && !token){
                event.preventDefault();
                $location.path('/');
                window.alert('You must be logged in to access admin area');
            }
                
            
          });
    };    
})();