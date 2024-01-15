class AddTicketLinkAndModifyColumnsInEvents < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :name, :string, array: true, default: [], using: 'ARRAY[name]'
    change_column :events, :description, :string, array: true, default: [], using: 'ARRAY[description]'
    change_column :events, :type_event, :string, array: true, default: [], using: 'ARRAY[type_event]'
    change_column :events, :date, :string, array: true, default: [], using: 'ARRAY[date]'
    change_column :events, :time, :string, array: true, default: [], using: 'ARRAY[time]'
  end
end
