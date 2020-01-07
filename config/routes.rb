Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:create, :show, :update]
    resources :sessions, only: [:create, :destroy]
    resources :genders, only: [:index, :show]
    resources :colors, only: [:index, :show]
    resources :materials, only: [:index, :show]
    resources :styles, only: [:index, :show]
    resources :sizes, only: [:index, :show]
    resources :products, only: [:index, :show]
    resources :cart_items, only: [:index, :show, :update, :destroy]
    
    end

  end
  root "static_pages#root"
end

    # resources :shoes, only: [:index, :show, :create, :update, :edit]
    # resources :accessories, only: [:index, :show, :create, :update, :edit]
    # resources :materials, only: [:index, :show, :create]
    # resources :reviews, only: [:create, :show, :edit, :destroy]
    # resource :user, only: [:create]
    # resource :cart 
    
    # resources :materials, only: [:index, :show]
    # resources :colors, only: [:index, :show]
    # resources :shoes_colors, only: [:index, :show]
    # resources :shoes_materials, only: [:index, :show]


    # resources :users, only: [:create, :update, :show] do
    #   resources :items, only: [:show]
    #   resources :carts, only: [:create, :show] do
    #     resources :cart_items, except: [:new, :edit]
    #   end