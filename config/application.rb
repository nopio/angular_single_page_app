require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AngularSinglePageApp
  class Application < Rails::Application
    config.angular_templates.module_name    = 'templates'
    #config.angular_templates.ignore_prefix  = %w(templates/)
    config.angular_templates.inside_paths   = ['app/assets/javascripts/angular']
  end
end
