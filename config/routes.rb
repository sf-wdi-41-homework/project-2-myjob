Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#index'

  get '/', to:'users#index', as: 'home'
  get '/signup', to:'users#new', as: 'signup'
  post '/signup', to:'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/dashboard', to: 'companies#index', as: 'dashboard'
  get '/new/company', to: 'companies#new', as: 'companies'
  post '/new/company', to: 'companies#create'
  get '/company/:id', to: 'companies#show', as: 'company'
  get '/companies/:user_id', to: 'companies#chart'
  get '/company/:id/edit', to: 'companies#edit', as: 'edit_company'
  put 'company/:id', to: 'companies#update', as:'update_company'
  patch 'company/:id', to: 'companies#update'
  delete 'company/:id', to: 'companies#destroy'


  get '/profile', to: 'profiles#index', as: 'my_profile'
  get '/new/profile', to: 'profiles#new'
  post '/new/profile', to: 'profiles#create'
  get '/profile/:id', to: 'profiles#edit', as: 'profile'
  put '/profile/:id', to: 'profiles#update'
  patch '/profile/:id', to: 'profiles#update'


end
