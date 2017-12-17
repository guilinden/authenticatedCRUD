(function(){
    angular
    .module('app')
    .service('users', users);

    function users($http){
        var vm = this;

        vm.login = login;

        function login(userInfo){
            return $http({
                method: 'post',
                url: 'http://localhost:3000/users/login',
                data: userInfo
            });
        }


    };
})();