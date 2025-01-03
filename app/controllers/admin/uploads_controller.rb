module Admin
  class UploadsController < Admin::ApplicationController
    def new
      # Display the upload form
    end

    def create
      # Attach the uploaded file and generate the URL
      uploaded_file = params[:file]
      if uploaded_file.present?
        blob = ActiveStorage::Blob.create_and_upload!(
          io: uploaded_file,
          filename: uploaded_file.original_filename,
          content_type: uploaded_file.content_type
        )

        @uploaded_url = ENV["CLOUDFLARE_PUBLIC_URL"] + blob.key
        flash[:notice] = "File uploaded successfully. URL: #{@uploaded_url}"
        render :new
      else
        flash[:alert] = "Please select a file to upload."
        render :new
      end
    end
  end
end
