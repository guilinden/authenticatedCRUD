(function(){
    angular
    .module('app')
    .run(function ($rootScope) {
        
          $rootScope.$on('$stateChangeStart','$log','$location', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
        
            if (requireLogin) {
              event.preventDefault();
              $location.path('/');
              $log.log('Teste');
            }
            else{
                $log.log('Teste 2');
                $location.path('/');
            }
          });
        
        });
        
});