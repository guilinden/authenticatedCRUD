class OrdersController < ApplicationController
    
    def index
        orders = Order.order("created_at DESC")
        render json: {status:"SUCCESS", message:"Loaded orders", data:orders}, status: :ok
    end 

    def show
        order = Order.find(params[:id])
        render json: {status:"SUCCESS",message:"Order successfully found", data:order},status: :ok
    end
    
    def create
        order = Order.new(order_params)
        if order.save
            render json: {status:"SUCCESS",message:"Order successfully created", data:order},status: :ok
        else
            render json: {status:"ERROR",message:"Cannot create order", data:order.erros},status: :unprocessable_entity
        end
    end

    def update
        order = Order.find(params[:id])
        if order.update_attributes(order_params)
            render json: {status:"SUCCESS",message:"Order successfully updated", data:order},status: :ok
        else
            render json: {status:"ERROR",message:"Cannot update order", data:order.erros},status: :unprocessable_entity
        end
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
