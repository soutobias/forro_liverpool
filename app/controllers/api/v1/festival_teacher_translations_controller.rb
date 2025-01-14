# frozen_string_literal: true

module Api
  module V1
    class FestivalTeacherTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @festival_teacher_translations = FestivalTeacherTranslation.all

        render json: @festival_teacher_translations
      end

      # GET /questions/1
      def show
        render json: @festival_teacher_translation
      end

      # POST /sites
      def create
        @festival_teacher_translation = FestivalTeacherTranslation.new(festival_teacher_params)

        if @festival_teacher_translation.save
          render json: @festival_teacher_translation, status: :created, location: @festival_teacher_translation
        else
          render json: @festival_teacher_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @festival_teacher_translation.update(festival_teacher_params)
          render json: @festival_teacher_translation
        else
          render json: @festival_teacher_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @festival_teacher_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @festival_teacher_translation = LiverpoolQuestionTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def festival_teacher_params
        params.require(:festival_teacher_translations).permit(:function, :image, :name, :location)
      end
    end
  end
end
