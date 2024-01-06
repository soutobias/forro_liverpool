# frozen_string_literal: true

class AddTitlevideoToSiteFestivals < ActiveRecord::Migration[7.1]
  def change
    add_column :sitefestivals, :titlevideo, :string
  end
end
