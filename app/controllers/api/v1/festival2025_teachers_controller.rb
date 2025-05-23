# frozen_string_literal: true

module Api
  module V1
    class Festival2025TeachersController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      def index
        @festival_teachers = Festival2025Teacher.all

        render json: @festival_teachers
      end

      def show
        render json: @festival_teacher
      end

      # POST /sites
      def create
        @festival_teacher = Festival2025Teacher.new(festival_teacher_params)

        if @festival_teacher.save
          render json: @festival_teacher, status: :created, location: @festival_teacher
        else
          render json: @festival_teacher.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @festival_teacher.update(site_params)
          render json: @festival_teacher
        else
          render json: @festival_teacher.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @festival_teacher.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @festival_teacher = Festival2025Teacher.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def site_params
        params.require(:festival_teachers).permit(:image, :name, :location, :function)
      end
    end
  end
end
