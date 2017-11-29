module TasksHelper
  def task_params
    params.require(:tasks).permit(:subject, :details, :status, :company)
  end
end
