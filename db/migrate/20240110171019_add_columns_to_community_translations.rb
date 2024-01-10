class AddColumnsToCommunityTranslations < ActiveRecord::Migration[7.1]
  def change
    add_column :community_translations, :profile_image, :text, array: true, default: []
    add_column :community_translations, :name, :string, array: true, default: []
  end
end
