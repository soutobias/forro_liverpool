class ChangeEventsPriceToString < ActiveRecord::Migration[7.1]
  def change
    change_column :events, :price, :string
  end
end
