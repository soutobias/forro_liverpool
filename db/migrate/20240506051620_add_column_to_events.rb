class AddColumnToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :schedule, :string
  end
end
