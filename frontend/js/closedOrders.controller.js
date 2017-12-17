(function(){
    angular
    .module('app')
    .controller('closedOrdersController', closedOrdersController);

    function closedOrdersController(orders,$log,$cookies){
        var vm = this;

        vm.getClosedOrders = getClosedOrders;
        vm.openOrder = openOrder;

        vm.token = $cookies.get('token');

        function getClosedOrders(){
            orders.getClosedOrders(vm.token)
            .then(function successCallback(data){
                vm.orders = data;
            }, function errorCallback(error){
                $log.log("Unable to fetch data" + error);
            });
        }

        getClosedOrders();

        function openOrder(orderId){
            $log.log(orderId)
            orders.openOrder(orderId,vm.token)
            .then(function successCallback(data){
                getClosedOrders();
            }, function errorCallback(error){
                $log.log("Unable to fetch data" + error);
            });
        }
    }
})()