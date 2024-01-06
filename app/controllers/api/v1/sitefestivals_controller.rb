# frozen_string_literal: true

module Api
  module V1
    class SitefestivalsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @sitefestivals = Sitefestival.all

        render json: @sitefestivals
      end

      # GET /sites/1
      def show
        render json: @sitefestival
      end

      # POST /sites
      def create
        @sitefestival = Sitefestival.new(site_params)

        if @sitefestival.save
          render json: @sitefestival, status: :created, location: @sitefestival
        else
          render json: @sitefestival.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @sitefestival.update(site_params)
          render json: @sitefestival
        else
          render json: @sitefestival.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @sitefestival.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @sitefestival = Sitefestival.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def site_params
        params.require(:sitefestival).permit(:navbar, :image, :data, :local, :video, :textvideo, :titlevideo)
      end
    end
  end
end
