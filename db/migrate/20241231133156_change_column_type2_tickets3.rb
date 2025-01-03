class ChangeColumnType2Tickets3 < ActiveRecord::Migration[7.1]
  def change
    add_column :tickets, :lote, :integer
  end
end
