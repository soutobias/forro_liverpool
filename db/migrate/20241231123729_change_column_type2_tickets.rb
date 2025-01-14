class ChangeColumnType2Tickets < ActiveRecord::Migration[7.1]
  def change
    add_column :tickets, :status2, :string, array: true, default: []
    add_column :tickets, :ticket_description, :string, array: true, default: []
  end
end
