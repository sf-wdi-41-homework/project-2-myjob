class CompaniesController < ApplicationController
  before_action :company_params_id, only: [:update, :show, :edit, :destroy]
  before_action :authentication


  def index
    if current_user.profile == nil
      flash[:error] = "You have a empty profile please update it"
    end
    @companies = current_user.companies.all
  end

  def new
    @company = Company.new
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

  def show
  end

  def chart
    @company = Company.where("user_id = #{current_user.id}")
    respond_to do |format|
      format.json {render :json => @company}
    end
  end

  def edit
  end

  def update
    if @company.update(company_params)
      flash[:success] = "#{@company.company_name} status updated"
      respond_to do |format|
        format.html{redirect_to dashboard_path}
        format.json {render :json =>@company}
      end
    else
      flash[:error] = "Update failed please try again"
      redirect_to edit_company_path
    end
  end

  def destroy
    if @company.destroy
      flash[:success] = "#{@company.company_name} has been deleted from your list"
      redirect_to dashboard_path
    else
      flash[:error] = "Delete failed please try again"
      redirect_to company_path
    end
  end
end
