class CreateSiteTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :site_translations do |t|
      t.text :title
      t.text :description
      t.text :frame

      t.timestamps
    end
  end
end
