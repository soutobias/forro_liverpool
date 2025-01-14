class CreateTickets < ActiveRecord::Migration[7.1]
  def change
    create_table :tickets do |t|
      t.string :lote
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.decimal :price
      t.string :status
      t.string :ticket_type
      t.timestamps
    end
  end
end
