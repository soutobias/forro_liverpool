class RenameFestivalTeachersTranslationsToFestivalTeacherTranslations < ActiveRecord::Migration[7.1]
  def change
    rename_table :festival_teachers_translations, :festival_teacher_translations
  end
end
