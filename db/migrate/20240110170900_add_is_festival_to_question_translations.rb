class AddIsFestivalToQuestionTranslations < ActiveRecord::Migration[7.1]
  def change
    add_column :question_translations, :is_festival, :boolean
  end
end
