# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Forroliverpool
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w[assets tasks])

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.

    # config.generators do |generator|
    #   generator.test_framework :rspec, fixtures: false
    #   generator.fixture_replacement :factory_bot, dir: 'spec/factories'
    #   generator.view_specs false
    #   generator.helper_specs false
    #   generator.helper false
    # end
    # config.eager_load_paths << Rails.root.join('lib')

    # config.api_only = true
    config.api_only = false
    config.assets.enabled = true
    config.assets.precompile += %w( administrate/application.css administrate/application.js )
    config.middleware.use ActionDispatch::Flash
    config.session_store :cookie_store, key: '_your_app_name_session'
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.autoload_paths << Rails.root.join("app/fields")
    config.eager_load_paths << Rails.root.join("app/fields")
  end
end
