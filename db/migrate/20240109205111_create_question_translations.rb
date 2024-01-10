class CreateQuestionTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :question_translations do |t|
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
