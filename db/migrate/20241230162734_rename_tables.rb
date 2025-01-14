class RenameTables < ActiveRecord::Migration[7.1]
  def change
    rename_table :site_2025_festivals, :site2025_festivals
    rename_table :site_2025_festival_translations, :site2025_festival_translations
    rename_table :festival_2025_teachers, :festival2025_teachers
    rename_table :festival_2025_teacher_translations, :festival2025_teacher_translations
  end
end
