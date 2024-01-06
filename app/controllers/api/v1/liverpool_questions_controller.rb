# frozen_string_literal: true

module Api
  module V1
    class LiverpoolQuestionsController < ApplicationController
      before_action :set_question, only: %i[show update destroy]

      def index
        @liverpool_questions = LiverpoolQuestion.all

        render json: @liverpool_questions
      end

      def show
        render json: liverpool_questions
      end

      def create
        @liverpool_question = LiverpoolQuestion.new(liverpool_question_params)

        if @liverpool_question.save
          render json: @liverpool_question, status: :created, location: @liverpool_question
        else
          render json: @liverpool_question.errors, status: :unprocessable_entity
        end
      end

      def update
        if @liverpool_question.update(liverpool_question_params)
          render json: @liverpool_question
        else
          render json: @liverpool_question.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @liverpool_question.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_question
        @liverpool_question = LiverpoolQuestion.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def liverpool_question_params
        params.require(:liverpool_questions).permit(:question, :answer)
      end
    end
  end
end
