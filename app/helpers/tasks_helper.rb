module TasksHelper
  def task_params
    params.require(:tasks).permit(:subject, :details, :status, :company)
  end

  def task_params_id
    @task = Task.find(params[:id])
  end

  def task_company
    @companies = ["None"]
    current_user.companies.each do |company|
      @companies << company.company_name
    end
  end
end
