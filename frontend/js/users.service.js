(function(){
    angular
    .module('app')
    .service('users', users);

    function users($http,$cookies){
        var vm = this;

        vm.login = login;
        vm.check_user = check_user;


        

        function check_user(token){
           vm.token = $cookies.get('token');
        };

        function login(userInfo){
            return $http({
                method: 'post',
                url: 'http://localhost:3000/users/login',
                data: userInfo
            });
        }


    };
})();