# frozen_string_literal: true

class AddIsFestivalToEventsAndQuestions < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :is_festival, :boolean
    add_column :questions, :is_festival, :boolean
  end
end
