class ChangeColumnType2Tickets2 < ActiveRecord::Migration[7.1]
  def change
    remove_column :tickets, :lote
    rename_column :tickets, :ticket_description, :forro_class
    add_column :tickets, :forro_party, :string, array: true, default: []
  end
end
