class CreateLiverpoolQuestionTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :liverpool_question_translations do |t|
      t.string :question
      t.string :answer
      t.timestamps
    end
  end
end
