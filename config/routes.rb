Rails.application.routes.draw do
  resources :players
  post '/auth/login', to: 'authentication#login'
  # get '/users/verify', to: 'users#verify'

  # resources :users do
  #   # resources :teams
  #   end

  
  # resources :users, only: [:show, :update, :destroy] do
  #   resources :players, only: [:index, :show]
  # end
  resources :users
  resources :players
  resources :teams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
