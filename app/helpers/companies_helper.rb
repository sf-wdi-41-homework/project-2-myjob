module CompaniesHelper
  def company_params
    params.require(:companies).permit(:progress, :company_name, :postitions_reference, :contact1, :contact2, :contact3)
  end

  def company_params_id
    @company = Company.find(params[:id])
  end
end
