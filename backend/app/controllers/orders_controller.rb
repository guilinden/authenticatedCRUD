class OrdersController < ApplicationController
    def create
        order = Order.new(order_params)
        if order.save
            render json {}
        else
            render json {}
        end
    end

end
