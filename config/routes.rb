# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Api::Engine => '/api-docs'
  mount Rswag::Ui::Engine => '/api-docs'
  namespace :api do
    namespace :v1 do
      resources :communities
      resources :events
      resources :event_users
      resources :posts
      resources :questions
      resources :sites
      resources :users
      resources :sitefestivals
      resources :festival_teachers
      resources :liverpool_questions
      resources :site_translations
      resources :question_translations
      resources :liverpool_question_translations
      resources :community_translations
      resources :site_festival_translations
      resources :festival_teacher_translations
    end
  end

  # get 'up' => 'rails/health#show', as: :rails_health_check

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

  # Defines the root path route ("/")
  # root "posts#index"
end
