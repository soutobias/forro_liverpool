# frozen_string_literal: true

class CreateLiverpoolQuestions < ActiveRecord::Migration[7.1]
  def change
    create_table :liverpool_questions do |t|
      t.text :question
      t.text :answer

      t.timestamps
    end
  end
end
