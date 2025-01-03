# All Administrate controllers inherit from this
# `Administrate::ApplicationController`, making it the ideal place to put
# authentication logic or other before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.
module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_admin

    def authenticate_admin
      # http_basic_authenticate_with(
      #   name: ENV.fetch("ADMIN_NAME"),
      #   password: ENV.fetch("ADMIN_PASSWORD")
      # )
    end

    def resource_params
      params.require(resource_class.model_name.param_key).
        permit(dashboard.permitted_attributes(action_name)).
        to_h.each_with_object({}) do |(key, value), result|
          result[key] = process_field(value, key)
        end
    end

    private

    def array_fields
      []
    end
    def process_field(value, field_name)
      if array_fields.include?(field_name.to_sym)
        process_array_field(value)
      elsif value.is_a?(String)
        process_string_field(value)
      else
        value
      end
    end

    def process_array_field(value)
      return [] if value.blank?

      Array(value).flat_map { |item| item.split("\n").map(&:strip) }
    end

    def process_string_field(value)
      return nil if value.blank?

      value.strip
    end

    # Override this value to specify the number of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end
