Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  

  resources :users do
    collection do
      post 'login'
    end
  end

  get '/orders/open_orders', to: 'orders#open_orders'
  get '/orders/closed_orders', to: 'orders#closed_orders'
  resources :orders 
  

end
