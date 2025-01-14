class CreateFestival2025TeacherTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :festival_2025_teacher_translations do |t|
      t.string :name
      t.string :location
      t.string :function
      t.text :image, default: [], array: true
      t.timestamps
    end
  end
end
