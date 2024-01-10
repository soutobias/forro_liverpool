class CreateCommunityTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :community_translations do |t|
      t.text :profile
      t.text :description
      t.timestamps
    end
  end
end
