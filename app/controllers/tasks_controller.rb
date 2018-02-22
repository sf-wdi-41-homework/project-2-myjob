class TasksController < ApplicationController
  before_action :task_company, only: [:new, :edit]
  before_action :task_params_id, only: [:update, :show, :edit, :destroy]
  before_action :authentication

  def new
    @task = Task.new

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

  def edit
  end

  def update
    if @task.update(task_params)
      flash[:sucess] = "Task: #{@task.subject} was updated"
      redirect_to dashboard_path
    else
      flash[:error] = "Task no updated please try again"
      redirect_to task_update_path
    end
  end

  def destroy
    if @task.destroy
      flash[:success] = "Task #{@task.subject} was deleted"
      redirect_to dashboard_path
    else
      flash[:error] = "Task delete failed please try again"
    end
  end
end
