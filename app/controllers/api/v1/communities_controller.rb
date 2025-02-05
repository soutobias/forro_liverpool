# frozen_string_literal: true

module Api
  module V1
    class CommunitiesController < ApplicationController
      before_action :set_community, only: %i[show update destroy]

      # GET /communities
      def index
        @communities = Community.all

        render json: @communities
      end

      # GET /communities/1
      def show
        render json: @community
      end

      # POST /communities
      def create
        @community = Community.new(community_params)

        if @community.save
          render json: @community, status: :created, location: @community
        else
          render json: @community.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /communities/1
      def update
        if @community.update(community_params)
          render json: @community
        else
          render json: @community.errors, status: :unprocessable_entity
        end
      end

      # DELETE /communities/1
      def destroy
        @community.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_community
        @community = Community.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def community_params
        params.require(:community).permit(profile_image: [], name: [])
      end
    end
  end
end
