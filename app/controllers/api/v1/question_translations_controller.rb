# frozen_string_literal: true

module Api
  module V1
    class QuestionTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @question_translations = QuestionTranslation.all

        render json: @question_translations
      end

      # GET /questions/1
      def show
        render json: @question_translation
      end

      # POST /sites
      def create
        @question_translation = QuestionTranslation.new(question_params)

        if @question_translation.save
          render json: @question_translation, status: :created, location: @question_translation
        else
          render json: @question_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @question_translation.update(question_params)
          render json: @question_translation
        else
          render json: @question_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @question_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @question_translation = QuestionTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def question_params
        params.require(:question_translations).permit(:question, :answer, :is_festival)
      end
    end
  end
end
