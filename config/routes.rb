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
  get '/new/company', to: 'companies#new', as: 'add_company'
  post '/new/company', to: 'companies#create'
  get '/companies/:user_id', to: 'companies#chart'

  get '/profile', to: 'profiles#index', as: 'my_profile'
  get '/new/profile', to: 'profiles#new'
  post '/new/profile', to: 'profiles#create'

end
