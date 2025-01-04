class FilesController < ApplicationController
  include ActionController::MimeResponds
  include ActionView::Rendering
  require 'net/http'

  def download
    image_name = params[:image_name]
    extension = params[:extension]
    r2_url = "https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/forroliverpool/#{image_name}.#{extension}"

    uri = URI(r2_url)
    response = Net::HTTP.get_response(uri)

    if response.is_a?(Net::HTTPSuccess)
      send_data(
        response.body,
        filename: image_name + ".jpg",
        type: response.content_type,
        disposition: 'attachment'
      )
    else
      render plain: "File not found", status: :not_found
    end
  end

  def show
    image_name = params[:image_name]
    extension = params[:extension]
    object_store_url = "https://pub-300f3c2ca8864f7c86d0abf8f5751408.r2.dev/forroliverpool/#{image_name}.#{extension}"

    cached_image = Rails.cache.fetch(object_store_url, expires_in: 1.hour) do
      uri = URI(object_store_url)
      response = Net::HTTP.get_response(uri)

      if response.is_a?(Net::HTTPSuccess)
        { body: response.body, content_type: response.content_type }
      else
        nil
      end
    end

    if cached_image
      if request.format.html?
        @image_url = object_store_url
        @image_name = image_name
        @title = "Amazing Photo - #{@image_name}"
        @description = "Check out this amazing photo: #{@image_name}"
        render template: "files/show"
      else
        send_data cached_image[:body], type: cached_image[:content_type], disposition: 'inline'
      end
    else
      render json: { error: "Unable to fetch image" }, status: :bad_request
    end
  end
end
