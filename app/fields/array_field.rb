require "administrate/field/base"

class ArrayField < Administrate::Field::Base
  def to_s
    (data || []).join(", ")
  end
end
