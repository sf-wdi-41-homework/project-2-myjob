class DocumentsController < ApplicationController
  def new
    @document = Document.new
  end

  def create
    @document = Document.new(document_params)
    if current_user.profile.documents << @document
      flash[:success] = "Document uploaded"
      redirect_to my_profile_path
    else
      flash[:error] = "Upload Failed"
      redirect_to my_profile_path
    end
  end

  def show
    @document = Document.find(params[:id])
    send_data(@document.file_contents,
            type: @document.content_type,
            filename: @document.filename)
  end

  def destroy
    @document = Document.find(params[:id])
    if @document.destroy
      flash[:success] = "You have deleted the document"
      redirect_to my_profile_path
    else
      flash[:error] = "Delete process failed"
      redirect_to my_profile
    end
  end

  private
  def document_params
  params.require(:document).permit(:file, :title)
  end
end
