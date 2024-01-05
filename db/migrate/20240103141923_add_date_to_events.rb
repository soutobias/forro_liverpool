# frozen_string_literal: true

class AddDateToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :date, :string
  end
end
