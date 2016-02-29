source "https://rubygems.org"
ruby "2.3.0"
# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails", "4.2.4"

# Use SCSS for stylesheets
gem "sass-rails", "~> 5.0"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier", ">= 1.3.0"
# Use CoffeeScript for .coffee assets and views
# gem "coffee-rails", "~> 4.1.0"
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem "therubyracer", platforms: :ruby
gem "pg", "0.17.1"
# Use jquery as the JavaScript library
gem "jquery-rails"
gem "jquery-turbolinks"
gem "cloudinary", "1.1.0"

gem "websocket-rails"
gem "faye-websocket", "0.10.0"

gem 'coveralls', require: false
gem "sidekiq"
# Materialize
gem "materialize-sass", "0.97.1"
gem "bourbon"

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem "turbolinks"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.0"
# bundle exec rake doc:rails generates the API under doc/api.
gem "sdoc", "~> 0.4.0", group: :doc

# Use ActiveModel has_secure_password
gem "omniauth-oauth2", "~> 1.3.1"
gem "bcrypt", "~> 3.1.7"
gem "omniauth-facebook"
gem "omniauth-twitter"
gem "omniauth-google-oauth2", "0.2.10"

# Use Unicorn as the app server
# gem "unicorn"

# Use Capistrano for deployment
# gem "capistrano-rails", group: :development

group :development, :test do
  gem "travis", "1.8.0"
  gem "rspec-rails"
  # gem "pg",             "0.17.1"
  gem "capybara"
  gem "selenium-webdriver"
  gem "database_cleaner"
  gem "pry"
  gem "pry-rails"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem "web-console", "~> 2.0"
  # Use sqlite3 as the database for Active Record
  # gem "pg",             "0.17.1"
  gem "rubocop", require: false
  gem "figaro"
end

group :production do
  gem "pg",             "0.17.1"
  gem "rails_12factor", "0.0.2"
  gem "puma"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
