Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 

    resource :session, only: [:create, :destroy]
    resources :shoes, only: [:index, :show]
    resources :materials, only: [:index, :show]
    resources :colors, only: [:index, :show]

    resources :users, only: [:create, :update, :show] do
      resources :items, only: [:index, :show]
    end

  end
  root "static_pages#root"
end
