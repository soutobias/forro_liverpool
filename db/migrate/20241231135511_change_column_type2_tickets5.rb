class ChangeColumnType2Tickets5 < ActiveRecord::Migration[7.1]
  def change
    add_column :tickets, :lote, :integer
  end
end
