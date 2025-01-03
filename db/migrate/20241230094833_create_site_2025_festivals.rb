class CreateSite2025Festivals < ActiveRecord::Migration[7.1]
  def change
    create_table :site_2025_festivals do |t|
      t.text "navbar", default: [], array: true
      t.text "image", default: [], array: true
      t.string "data"
      t.string "local"
      t.string "video"
      t.string "textvideo"
      t.string "titlevideo"
      t.timestamps
    end
  end
end
