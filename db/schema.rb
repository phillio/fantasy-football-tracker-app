# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_17_093155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "teamAbbr"
    t.string "rosterSlot"
    t.string "percentOwned"
    t.string "seasonRank"
    t.string "fantasyPtsSeason"
    t.string "fantasyPtsWeek"
    t.string "fantasyPtsWeekValue"
    t.string "fantasyProjectedPtsSeason"
    t.string "fantasyProjectedPtsWeek"
    t.string "fantasyProjectedPtsWeekValue"
    t.string "weekStatsPassYds"
    t.string "weekStatsPassTD"
    t.string "weekStatsPassInt"
    t.string "weekStatsRushYds"
    t.string "weekStatsRushTD"
    t.string "weekStatsRecYds"
    t.string "weekStatsRecTD"
    t.string "weekStatsFumLost"
    t.string "weekStatsFumTD"
    t.string "seasonStatsPassYds"
    t.string "seasonStatsPassTD"
    t.string "seasonStatsPassInt"
    t.string "seasonStatsRushYds"
    t.string "seasonStatsRushTD"
    t.string "seasonStatsRecYds"
    t.string "seasonStatsRecTD"
    t.string "seasonStatsFumLost"
    t.string "seasonStatsFumTD"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "teams", "users"
end
