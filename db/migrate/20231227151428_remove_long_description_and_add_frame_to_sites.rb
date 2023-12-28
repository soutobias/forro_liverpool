class RemoveLongDescriptionAndAddFrameToSites < ActiveRecord::Migration[7.1]
  def change
    remove_column :sites, :long_description, :text
    add_column :sites, :frame, :text
  end
end
