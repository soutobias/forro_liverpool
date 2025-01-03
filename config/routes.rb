# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :admin do
      resources :communities
      resources :community_translations
      resources :events
      # resources :event_users
      resources :festival_teachers
      resources :festival_teacher_translations
      resources :festival2025_teachers
      resources :festival2025_teacher_translations
      resources :liverpool_questions
      resources :liverpool_question_translations
      # resources :posts
      resources :questions
      resources :question_translations
      resources :sites
      resources :site_festival_translations
      resources :site_translations
      resources :sitefestivals
      resources :site2025_festival_translations
      resources :site2025_festivals
      # resources :users
      resources :tickets
      resources :lotes
      resources :uploads, only: [:new, :create]
      root to: "events#index"
    end
  mount Rswag::Api::Engine => '/api-docs'
  mount Rswag::Ui::Engine => '/api-docs'
  namespace :api do
    namespace :v1 do
      resources :communities
      resources :events
      # resources :event_users
      # resources :posts
      resources :questions
      resources :sites
      # resources :users
      resources :tickets
      resources :lotes
      resources :sitefestivals
      resources :site2025_festivals
      resources :festival_teachers
      resources :festival2025_teachers
      resources :liverpool_questions
      resources :site_translations
      resources :question_translations
      resources :liverpool_question_translations
      resources :community_translations
      resources :site_festival_translations
      resources :site2025_festival_translations
      resources :festival_teacher_translations
      resources :festival2025_teacher_translations
    end
  end

  # get 'up' => 'rails/health#show', as: :rails_health_check

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

  # Defines the root path route ("/")
  # root "posts#index"
end
