# frozen_string_literal: true

module Api
  module V1
    class SiteTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @site_translations = SiteTranslation.all

        render json: @site_translations
      end

      # GET /sites/1
      def show
        render json: @site_translation
      end

      # POST /sites
      def create
        @site_translation = SiteTranslation.new(site_params)

        if @site_translation.save
          render json: @site_translation, status: :created, location: @site_translation
        else
          render json: @site_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @site_translation.update(site_params)
          render json: @site_translation
        else
          render json: @site_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @site_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @site_translation = SiteTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def site_params
        params.require(:site_translations).permit(:title, :description, :frame, :cover_image, :cover_video, :image)
      end
    end
  end
end
