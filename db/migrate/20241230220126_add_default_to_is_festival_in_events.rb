class AddDefaultToIsFestivalInEvents < ActiveRecord::Migration[7.1]
  def change
    change_column_default :events, :is_festival, from: nil, to: "no"
  end
end
