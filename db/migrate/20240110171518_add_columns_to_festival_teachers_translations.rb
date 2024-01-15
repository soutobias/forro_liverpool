class AddColumnsToFestivalTeachersTranslations < ActiveRecord::Migration[7.1]
  def change
    add_column :festival_teachers_translations, :image, :string
    add_column :festival_teachers_translations, :name, :string
    add_column :festival_teachers_translations, :location, :string
  end
end
