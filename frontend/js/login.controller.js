(function(){
    angular
    .module('app')
    .controller('loginController', loginController);

    function loginController(users,$log,$cookies,$location){
        var vm = this;

        vm.login = login;
        vm.logout = logout;

        function login(){
            vm.userInfo = {
                'email': vm.email,
                'password': vm.password
            }

            users.login(vm.userInfo)
            .then( function successCallback(token){
                $cookies.put('token', token.data.auth_token);
                $location.path('/home');
            }, function errorCallback(error){
                $log.log(error.data.error);
                window.alert("Wrong username or password");
            });
        };

        function logout(){
            $cookies.delete('token');
            $location.path('/');
        }

    };

})();