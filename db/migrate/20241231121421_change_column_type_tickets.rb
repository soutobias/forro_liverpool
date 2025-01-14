class ChangeColumnTypeTickets < ActiveRecord::Migration[7.1]
  def change
    change_column :tickets, :lote, :string, array: true, default: [], using: 'lote::varchar[]'
    change_column :tickets, :status, :string, array: true, default: [], using: 'status::varchar[]'
    change_column :tickets, :ticket_type, :string, array: true, default: [], using: 'ticket_type::varchar[]'
  end
end
