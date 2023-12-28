class CreateSitefestivals < ActiveRecord::Migration[7.1]
  def change
    create_table :sitefestivals do |t|
      t.text :navbar, array: true, default: []
      t.text :image, array: true, default: []
      t.string :data
      t.string :local

      t.timestamps
    end
  end
end
