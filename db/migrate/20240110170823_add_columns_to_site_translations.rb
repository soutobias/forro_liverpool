class AddColumnsToSiteTranslations < ActiveRecord::Migration[7.1]
  def change
    add_column :site_translations, :cover_image, :text
    add_column :site_translations, :cover_video, :text
    add_column :site_translations, :image, :text, array: true, default: []
  end
end
