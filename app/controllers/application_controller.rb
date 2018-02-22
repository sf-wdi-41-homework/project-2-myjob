class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include UsersHelper
  include SessionsHelper
  include CompaniesHelper
  include ProfilesHelper
  include TasksHelper

end
