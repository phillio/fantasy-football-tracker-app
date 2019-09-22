Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'

  resources :users
  resources :teams
  resources :players

  # get '/users/verify', to: 'users#verify'

  # resources :users do
  #   # resources :teams
  #   end

  
  # resources :users, only: [:show, :update, :destroy] do
  #   resources :players, only: [:index, :show]
  # end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
