class UsersController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end

  def create
    if user_params[:password] != user_params[:confirm_password]
      flash[:error] = "Password did not match"
      redirect_to signup_path
    else
      @user = User.new(user_params)
      if @user.save
        login(@user)
        redirect_to dashboard_path
      else
        flash[:error] = @user.errors.full_messages[0]
        redirect_to signup_path
      end
    end
  end


end
