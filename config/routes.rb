Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "users#index"

  get "/", to:"users#index", as: "home"
  get "/signup", to:"users#new", as: "signup"
  post "/signup", to:"users#create"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end
