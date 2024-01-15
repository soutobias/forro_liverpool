# frozen_string_literal: true

module Api
  module V1
    class CommunityTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @community_translations = CommunityTranslation.all

        render json: @community_translations
      end

      # GET /communitys/1
      def show
        render json: @community_translation
      end

      # POST /sites
      def create
        @community_translation = CommunityTranslation.new(community_params)

        if @community_translation.save
          render json: @community_translation, status: :created, location: @community_translation
        else
          render json: @community_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @community_translation.update(community_params)
          render json: @community_translation
        else
          render json: @community_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @community_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @community_translation = CommunityTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def community_params
        params.require(:community_translations).permit(:profile, :description, :profile_image, :name)
      end
    end
  end
end
