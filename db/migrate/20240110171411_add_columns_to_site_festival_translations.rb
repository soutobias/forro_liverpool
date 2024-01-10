class AddColumnsToSiteFestivalTranslations < ActiveRecord::Migration[7.1]
  def change
    add_column :site_festival_translations, :image, :text, array: true, default: []
    add_column :site_festival_translations, :video, :string
  end
end
