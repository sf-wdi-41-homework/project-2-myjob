module ProfilesHelper
  def profile_params
    params.require(:profile).permit(:full_name, :phone_number, :email, :address)
  end

  def profile_params_id
    @profile = Profile.find(current_user.profile.id)
  end
end
