(function(){
    angular
    .module('app')
    .service('orders', orders);

    function orders($http){
        var vm = this;

        vm.getOpenOrders = getOpenOrders;
        vm.closeOrder = closeOrder;
        vm.getClosedOrders = getClosedOrders;
        vm.openOrder = openOrder;

        function getOpenOrders(token){
            return $http({
                method: 'get',
                url: 'http://localhost:3000/orders/open_orders',
                headers: {
                    'Authorization': token
                  }
                 
            });
        }
        
        function getClosedOrders(token){
            return $http({
                method: 'get',
                url: 'http://localhost:3000/orders/closed_orders',
                headers: {
                    'Authorization': token
                  }
            });
        }

        function closeOrder(orderId,token){
            return $http({
                method: 'put',
                url: 'http://localhost:3000/orders/' + orderId,
                data: {
                    'alreadysent': 'true'
                },
                headers: {
                    'Authorization': token
                  } 
            });
            
        }

        function openOrder(orderId,token){
            return $http({
                method: 'put',
                url: 'http://localhost:3000/orders/' + orderId,
                data: {
                    'alreadysent': 'false'
                },
                headers: {
                    'Authorization': token
                  }
            });
            
        }

    }
})();