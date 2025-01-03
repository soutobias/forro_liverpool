class ChangeColumnType2Tickets4 < ActiveRecord::Migration[7.1]
  def change
    remove_column :tickets, :lote
    remove_column :tickets, :status
    remove_column :tickets, :status2
    remove_column :tickets, :start_datetime
    remove_column :tickets, :end_datetime
  end
end
