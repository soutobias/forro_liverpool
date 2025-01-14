# frozen_string_literal: true

module Api
  module V1
    class Site2025FestivalTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @site_festival_translations = Site2025FestivalTranslation.all

        render json: @site_festival_translations
      end

      # GET /questions/1
      def show
        render json: @site_festival_translation
      end

      # POST /sites
      def create
        @site_festival_translation = Site2025FestivalTranslation.new(question_params)

        if @site_festival_translation.save
          render json: @site_festival_translation, status: :created, location: @site_festival_translation
        else
          render json: @site_festival_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @site_festival_translation.update(question_params)
          render json: @site_festival_translation
        else
          render json: @site_festival_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @site_festival_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @site_festival_translation = Site2025FestivalTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def question_params
        params.require(:site_festival_translations).permit(:navbar, :data, :local, :textvideo, :titlevideo, :image, :video)
      end
    end
  end
end
