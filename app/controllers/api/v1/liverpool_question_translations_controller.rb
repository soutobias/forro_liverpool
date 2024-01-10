# frozen_string_literal: true

module Api
  module V1
    class LiverpoolQuestionTranslationsController < ApplicationController
      before_action :set_site, only: %i[show update destroy]

      # GET /sites
      def index
        @liverpool_question_translations = LiverpoolQuestionTranslation.all

        render json: @liverpool_question_translations
      end

      # GET /questions/1
      def show
        render json: @liverpool_question_translation
      end

      # POST /sites
      def create
        @liverpool_question_translation = LiverpoolQuestionTranslation.new(question_params)

        if @liverpool_question_translation.save
          render json: @liverpool_question_translation, status: :created, location: @liverpool_question_translation
        else
          render json: @liverpool_question_translation.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /sites/1
      def update
        if @liverpool_question_translation.update(question_params)
          render json: @liverpool_question_translation
        else
          render json: @liverpool_question_translation.errors, status: :unprocessable_entity
        end
      end

      # DELETE /sites/1
      def destroy
        @liverpool_question_translation.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_site
        @liverpool_question_translation = LiverpoolQuestionTranslation.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def question_params
        params.require(:liverpool_question_translations).permit(:question, :answer)
      end
    end
  end
end
