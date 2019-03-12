Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :emails, only: [:create]
  end
end
  root 'homes#index'
end
