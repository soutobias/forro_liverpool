class ChangeLocationToArray < ActiveRecord::Migration[7.1]
  def up
    add_column :events, :location_temp, :text, array: true, default: [], null: false

    execute <<-SQL
      UPDATE events
      SET location_temp = ARRAY[location]
    SQL

    remove_column :events, :location
    rename_column :events, :location_temp, :location
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
