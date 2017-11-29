class TasksController < ApplicationController
  before_action :authentication

  def new
    @task = Task.new
    @companies = ["None"]
    current_user.companies.each do |company|
      @companies << company.company_name
    end

  end

  def create
    puts(`AAAAAA: #{@companies}`)
    @task = Task.new(task_params)
    if current_user.tasks << @task
      flash[:success] = "New task created"
      redirect_to dashboard_path
    else
      flash[:error] = "Task not created"
      redirect_to new_task_path
    end
  end
end
