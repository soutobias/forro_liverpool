class CreateFestivalTeachersTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :festival_teachers_translations do |t|
      t.string "function"
      t.timestamps
    end
  end
end
