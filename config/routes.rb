Rails.application.routes.draw do
  resources :customers, only: [:index, :create, :update, :show, :destroy]
  root 'main#index'
end
