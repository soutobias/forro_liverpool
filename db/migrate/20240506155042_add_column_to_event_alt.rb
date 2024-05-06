class AddColumnToEventAlt < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :schedule, :string, array: true, default: [], using: 'ARRAY[schedule]'
  end
end