require "administrate/base_dashboard"
require_relative "../fields/array_field"

class EventDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: ArrayField,
    date: ArrayField,
    description: ArrayField,
    start_datetime: Field::DateTime,
    end_datetime: Field::DateTime,
    image: ArrayField,
    is_class: Field::Boolean,
    is_festival: SelectField.with_options(choices: ["no", "2024", "2025"]),
    location: ArrayField,
    price: Field::String,
    cover_image: ArrayField,
    schedule: ArrayField,
    schedule_translation: ArrayField,
    time: ArrayField,
    type_event: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
    date
    start_datetime
    end_datetime
    is_festival
    description
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    name
    date
    description
    start_datetime
    end_datetime
    image
    is_class
    is_festival
    location
    price
    cover_image
    schedule
    schedule_translation
    time
    type_event
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    name
    date
    description
    start_datetime
    end_datetime
    image
    is_class
    is_festival
    location
    price
    schedule
    schedule_translation
    cover_image
    time
    type_event
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how events are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(event)
  #   "Event ##{event.id}"
  # end
end
