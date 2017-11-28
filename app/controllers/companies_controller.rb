class CompaniesController < ApplicationController
  def index
    if !current_user
      flash[:error] = "Please Login!"
      redirect_to root_path
    else
      if current_user.profile == nil
        flash[:error] = "You have a empty profile please update it"
      end
      @companies = current_user.companies.all
    end
  end

  def new
    if !current_user
      flash[:error] = "Please Login!"
      redirect_to root_path
    else
      @company = Company.new
    end
  end

  def create
    @company = Company.new(company_params)
    if current_user.companies << @company
      flash[:success] = "Congratz on applying to a new company!"
      redirect_to dashboard_path
    else
      flash[:error] = "Sorry something went wrong"
      redirect_to add_company_path
    end
  end
end
