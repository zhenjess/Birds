Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    # resources :shoes, only: [:index, :show, :create, :update, :edit]
    # resources :accessories, only: [:index, :show, :create, :update, :edit]
    # resources :materials, only: [:index, :show, :create]
    # resources :reviews, only: [:create, :show, :edit, :destroy]
    # resource :user, only: [:create]
    # resource :cart 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :shoes, only: [:index, :show]
  end
  root "static_pages#root"
end
