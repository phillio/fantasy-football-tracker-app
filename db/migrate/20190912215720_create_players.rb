class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :teamAbbr
      t.string :rosterSlot
      t.string :percentOwned
      t.string :rank
      t.string :fantasyPts
      t.string :fantasyProjectedPts
      t.string :weekStats
      t.string :seasonStats

      t.timestamps
    end
  end
end
