class AddColumnToEventSchedule < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :schedule_translation, :string, array: true, default: []
  end
end
