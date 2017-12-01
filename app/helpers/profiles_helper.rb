module ProfilesHelper
  def profile_params
    params.require(:profile).permit(:full_name, :phone_number, :email, :address, :linkin_url, :twitter, :github, :personalweb)
  end

  def profile_params_id
    @profile = Profile.find(current_user.profile.id)
  end
end
