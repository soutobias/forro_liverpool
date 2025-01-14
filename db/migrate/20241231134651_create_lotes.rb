class CreateLotes < ActiveRecord::Migration[7.1]
  def change
    create_table :lotes do |t|
      t.integer :lote_number
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.text :status, array: true, default: []
      t.text :status2, array: true, default: []
      t.timestamps
    end
  end
end
