class OrdersController < ApplicationController
    def create
        order = Order.new(order_params)
        if order.save
            render json: {message:"Order successfully created", data:order},status: :ok
        else
            render json: {message:"Cannot create order", data:order.erros},status: :unprocessable_entity
        end
    end


    def update
        
    end


    def destroy
        order  = Order.find(params[:id])
        if order.destroy
            render json: {message:"Order successfully deleted", data:order},status: :ok
        else
            render json: {message:"Cannot delete order", data:order.erros},status: :unprocessable_entity
        end
    end

    private
    def order_params
        params.permit(:address,:fullname,:cardnumber,:cvc,:price,:items,:alreadysent)
    end

end
