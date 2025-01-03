require "administrate/field/base"

class SelectField < Administrate::Field::Base
  def to_s
    data
  end

  def selectable_options
    options.fetch(:choices, [])
  end
end
