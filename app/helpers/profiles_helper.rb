module ProfilesHelper
  def profile_params
    params.require(:profile).permit(:full_name, :phone_number, :email, :address)
  end
end
