class CreateSiteFestivalTranslations < ActiveRecord::Migration[7.1]
  def change
    create_table :site_festival_translations do |t|
      t.text "navbar", default: [], array: true
      t.string "data"
      t.string "local"
      t.string "textvideo"
      t.string "titlevideo"
      t.timestamps
    end
  end
end
