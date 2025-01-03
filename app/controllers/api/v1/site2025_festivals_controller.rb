# frozen_string_literal: true

module Api
  module V1
    class Site2025FestivalsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @site_2025_festivals = Site2025Festival.all
        render json: @site_2025_festivals
      end

      # GET /sites/1
      def show
        render json: @site_2025_festival
      end

      # POST /sites
      def create
        @site_2025_festival = Site2025Festival.new(site_params)

        if @site_2025_festival.save
          render json: @site_2025_festival, status: :created, location: @site_2025_festival
        else
          render json: @site_2025_festival.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @site_2025_festival.update(site_params)
          render json: @site_2025_festival
        else
          render json: @site_2025_festival.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @site_2025_festival.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @site_2025_festival = Site2025Festival.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def site_params
        params.require(:site_2025_festival).permit(:navbar, :image, :data, :local, :video, :textvideo, :titlevideo)
      end
    end
  end
end
