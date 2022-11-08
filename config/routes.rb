Rails.application.routes.draw do
  #get 'pages/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :show, :index]
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
end
