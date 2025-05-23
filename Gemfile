# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.2.2'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.1.1'

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '>= 5.0'

# Deals with the same-origin policy (SOP) settings and allows cross-origin requests (Cross-Origin Resource Sharing, CORS).
gem 'rack-cors', require: 'rack/cors'

# Allows to start both the Rails server and the React server
gem 'foreman'

gem 'faker'

gem 'rswag-api'
gem 'rswag-ui'
gem 'sass-rails', '~> 6.0'

gem 'dotenv-rails'

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem 'image_processing', '~> 1.2'

# Use Active Storage for file uploads [https://guides.rubyonrails.org/active_storage_overview.html]
gem 'activestorage', '~> 7.0'

# Use Redis adapter to run Action Cable in production
gem 'redis', '>= 4.0.1'
gem "aws-sdk-s3", require: false

# Use Kredis to get higher-level data types in Redis [
# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[windows jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin Ajax possible
# gem "rack-cors"
gem "administrate"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri windows]
  gem 'factory_bot_rails', '~> 6.4', '>= 6.4.3'
  gem 'pry-rails', '~> 0.3.9'
  gem 'rspec-rails', '~> 6.1.0'
  gem 'rswag-specs'
  gem 'rubocop', '~> 1.59', require: false
end

group :test do
  gem 'simplecov', require: false
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end
