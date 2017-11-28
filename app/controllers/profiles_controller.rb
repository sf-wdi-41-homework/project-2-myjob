class ProfilesController < ApplicationController
  def index
    if !current_user
      flash[:error] = "Please Login!"
      redirect_to root_path
    else
      if current_user.profile
        @profile = current_user.profile
      else
        redirect_to new_profile_path
      end
    end
  end

  def new
    if !current_user
      flash[:error] = "Please Login!"
      redirect_to root_path
    else
    end
  end

  def create
    @profile = Profile.new(profile_params)
    if current_user.profile = @profile
      flash[:success] = "You have created your profile"
      redirect_to my_profile_path
    else
      flash[:error] = "Please try again"
      redirect_to new_profile_path
    end
  end

  def update
    @profile = Profile.find_by_user_id(current_user.id)
    if @profile.update(profile_params)
      flash[:success] = "Successfully updated profile!"
      redirect_to my_profile_path
    else
      flash[:error] = "Update failed"
      redirect_to my_profile_path
    end
  end
end
