# frozen_string_literal: true

module Api
  module V1
    class EventsController < ApplicationController
      before_action :set_event, only: %i[show update destroy]

      # GET /events
      def index
        if params[:all_events].present?
          events = Event.all.order(:id)
        else
          events = Event.where('start_datetime > ?', DateTime.now).order(:id)
        end
        future_events = if params[:is_festival].present?
                          is_festival_value = params[:is_festival]
                          puts "is_festival_value: #{is_festival_value}"
                          events.where(is_festival: is_festival_value)
                        else
                          events
                        end

        render json: future_events
      end

      # GET /events/1
      def show
        render json: @event
      end

      # POST /events
      def create
        @event = Event.new(event_params)

        if @event.save
          render json: @event, status: :created, location: @event
        else
          render json: @event.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /events/1
      def update
        if @event.update(event_params)
          render json: @event
        else
          render json: @event.errors, status: :unprocessable_entity
        end
      end

      # DELETE /events/1
      def destroy
        @event.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_event
        @event = Event.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def event_params
        params.require(:event).permit(:name, :description, :start_datetime, :end_datetime, :price, :cover_image, :image,
                                      :registration_start_datetime, :registration_end_datetime, :date,
                                      :time, :is_festival, :is_class, :ticket_link, :schedule, :schedule_translation)
      end
    end
  end
end
