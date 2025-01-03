# frozen_string_literal: true

class Community < ApplicationRecord
  before_save :clean_array_fields


  private

  def clean_array_fields
    self.profile_image = profile_image.reject(&:blank?) if profile_image
    self.name = name.reject(&:blank?) if name
  end
end
