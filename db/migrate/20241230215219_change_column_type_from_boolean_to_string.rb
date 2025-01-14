class ChangeColumnTypeFromBooleanToString < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :is_festival, :string
  end
end
