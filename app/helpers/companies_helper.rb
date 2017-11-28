module CompaniesHelper
  def company_params
    params.require(:companies).permit(:progress, :company_name, :postitions_reference, :contact1, :contact2, :contact3)
  end
end
