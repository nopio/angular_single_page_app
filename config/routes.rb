Rails.application.routes.draw do
  resources :customers, only: [:index, :create, :update, :show, :destroy] do
    collection do
      get :search
    end
  end
  root 'main#index'
end
