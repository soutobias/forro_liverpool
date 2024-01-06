# frozen_string_literal: true

class AddVideoAndTextVideoToSiteFestivals < ActiveRecord::Migration[7.1]
  def change
    add_column :sitefestivals, :video, :string
    add_column :sitefestivals, :textvideo, :string
  end
end
