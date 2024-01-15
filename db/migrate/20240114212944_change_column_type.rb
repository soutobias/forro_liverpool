class ChangeColumnType < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :type_event, :string
  end
end
