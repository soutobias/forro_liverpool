class CreateFestivalTeachers < ActiveRecord::Migration[7.1]
  def change
    create_table :festival_teachers do |t|
      t.string :image
      t.string :name
      t.string :location
      t.string :function
      t.timestamps
    end
  end
end
