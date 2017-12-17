(function(){
    angular
    .module('app')
    .controller('openOrdersController', openOrdersController);

    function openOrdersController(orders,$log,$cookies){
        var vm = this;

        vm.getOpenOrders = getOpenOrders;
        vm.closeOrder = closeOrder;
    
        vm.token = $cookies.get('token');

        function getOpenOrders(){
            $log.log(vm.token);
            orders.getOpenOrders(vm.token)
            .then(function successCallback(data){
                vm.orders = data;
                $log.log(data);
            }, function errorCallback(error){
                $log.log("Unable to fetch data" + error.data);
            });
        }

        getOpenOrders();

        function closeOrder(){
            $log.log(orderId)
            orders.closeOrder(orderId,vm.token)
            .then(function successCallback(data){
                getOpenOrders();
            }, function errorCallback(error){
                $log.log("Unable to fetch data" + error);
            });
        }


        
        
    }

})();