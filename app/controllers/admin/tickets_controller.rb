module Admin
  class TicketsController < Admin::ApplicationController
    def array_fields
      %i[
        ticket_type forro_class forro_party
      ]
    end
    # Overwrite any of the RESTful controller actions to implement custom behavior
    # For example, you may want to send an email after a foo is updated.
    #
    # def update
    #   super
    #   send_foo_updated_email(requested_resource)
    # end
    # Override this method to specify custom lookup behavior.
    # This will be used to set the resource for the `show`, `edit`, and `update`
    # actions.
    #
    # def find_resource(param)
    #   Foo.find_by!(slug: param)
    # end

    # The result of this lookup will be available as `requested_resource`

    # Override this if you have certain roles that require a subset
    # this will be used to set the records shown on the `index` action.
    #
    # def scoped_resource
    #   if current_user.super_admin?
    #     resource_class
    #   else
    #     resource_class.with_less_stuff
    #   end
    # end
    # def permitted_attributes
    #   super + [
    #     { name: [] },
    #     { profile_image: [] }
    #   ]
    # end

    # # Process each field based on its type (array or single string)
    # def process_field(value, field_name)
    #   if ARRAY_FIELDS.include?(field_name.to_sym)
    #     process_array_field(value)
    #   elsif value.is_a?(String)
    #     process_string_field(value)
    #   else
    #     value
    #   end
    # end

    # # Process fields that should be arrays
    # def process_array_field(value)
    #   return [] if value.blank?

    #   Array(value).flat_map { |item| item.split("\n").map(&:strip) }
    # end

    # # Process fields that should remain strings
    # def process_string_field(value)
    #   return nil if value.blank?

    #   value.strip
    # end
    # Override `resource_params` if you want to transform the submitted
    # data before it's persisted. For example, the following would turn all
    # empty values into nil values. It uses other APIs such as `resource_class`
    # and `dashboard`:
    #

    # def resource_params
    #   params.require(resource_class.model_name.param_key).
    #     permit(dashboard.permitted_attributes(action_name)).
    #     transform_values { |value| value == "" ? nil : value }
    # end

    # See https://administrate-demo.herokuapp.com/customizing_controller_actions
    # for more information
  end
end
