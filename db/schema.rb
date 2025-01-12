# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_01_12_013757) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "communities", force: :cascade do |t|
    t.text "profile_image", default: [], array: true
    t.string "name", default: [], array: true
    t.text "profile"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "community_translations", force: :cascade do |t|
    t.text "profile"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "profile_image", default: [], array: true
    t.string "name", default: [], array: true
  end

  create_table "event_users", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "event_id", null: false
    t.string "relation_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_users_on_event_id"
    t.index ["user_id"], name: "index_event_users_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", default: [], array: true
    t.string "description", default: [], array: true
    t.datetime "start_datetime"
    t.datetime "end_datetime"
    t.string "price"
    t.text "image", default: [], array: true
    t.datetime "registration_start_datetime"
    t.datetime "registration_end_datetime"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "type_event", default: "{}"
    t.text "location", default: [], null: false, array: true
    t.string "date", default: [], array: true
    t.string "time", default: [], array: true
    t.string "is_festival", default: "no"
    t.boolean "is_class"
    t.string "ticket_link"
    t.text "cover_image", default: [], array: true
    t.string "schedule", default: [], array: true
    t.string "schedule_translation", default: [], array: true
  end

  create_table "festival2025_teacher_translations", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "function"
    t.text "image", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "festival2025_teachers", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "function"
    t.text "image", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "festival_teacher_translations", force: :cascade do |t|
    t.string "function"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "location"
    t.text "image", default: [], array: true
  end

  create_table "festival_teachers", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "function"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "image", default: [], array: true
  end

  create_table "liverpool_question_translations", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "liverpool_questions", force: :cascade do |t|
    t.text "question"
    t.text "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lotes", force: :cascade do |t|
    t.integer "lote_number"
    t.datetime "start_datetime"
    t.datetime "end_datetime"
    t.text "status", default: [], array: true
    t.text "status2", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.text "description"
    t.text "cover_image"
    t.text "image", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "question_translations", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_festival"
  end

  create_table "questions", force: :cascade do |t|
    t.text "question"
    t.text "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_festival"
  end

  create_table "site2025_festival_translations", force: :cascade do |t|
    t.text "navbar", default: [], array: true
    t.text "image", default: [], array: true
    t.string "data"
    t.string "local"
    t.string "video"
    t.string "textvideo"
    t.string "titlevideo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "site2025_festivals", force: :cascade do |t|
    t.text "navbar", default: [], array: true
    t.text "image", default: [], array: true
    t.string "data"
    t.string "local"
    t.string "video"
    t.string "textvideo"
    t.string "titlevideo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "site_festival_translations", force: :cascade do |t|
    t.text "navbar", default: [], array: true
    t.string "data"
    t.string "local"
    t.string "textvideo"
    t.string "titlevideo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "image", default: [], array: true
    t.string "video"
  end

  create_table "site_translations", force: :cascade do |t|
    t.text "title"
    t.text "description"
    t.text "frame"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "cover_video"
    t.text "image", default: [], array: true
    t.text "cover_image", default: [], array: true
  end

  create_table "sitefestivals", force: :cascade do |t|
    t.text "navbar", default: [], array: true
    t.text "image", default: [], array: true
    t.string "data"
    t.string "local"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "video"
    t.string "textvideo"
    t.string "titlevideo"
  end

  create_table "sites", force: :cascade do |t|
    t.text "title"
    t.text "description"
    t.text "cover_video"
    t.text "image", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "frame"
    t.text "cover_image", default: [], array: true
  end

  create_table "tickets", force: :cascade do |t|
    t.string "ticket_type", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "forro_class", default: [], array: true
    t.string "forro_party", default: [], array: true
    t.integer "lote"
    t.integer "price"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "sell_site_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "event_users", "events"
  add_foreign_key "event_users", "users"
  add_foreign_key "posts", "users"
end
