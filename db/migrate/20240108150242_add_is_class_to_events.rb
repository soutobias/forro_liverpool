# frozen_string_literal: true

class AddIsClassToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :is_class, :boolean
  end
end
