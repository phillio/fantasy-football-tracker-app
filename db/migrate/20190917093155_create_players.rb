class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :teamAbbr
      t.string :rosterSlot
      t.string :percentOwned
      t.string :seasonRank
      t.string :fantasyPtsSeason
      t.string :fantasyPtsWeek
      t.string :fantasyPtsWeekValue
      t.string :fantasyProjectedPtsSeason
      t.string :fantasyProjectedPtsWeek
      t.string :fantasyProjectedPtsWeekValue
      t.string :weekStatsPassYds
      t.string :weekStatsPassTD
      t.string :weekStatsPassInt
      t.string :weekStatsRushYds
      t.string :weekStatsRushTD
      t.string :weekStatsRecYds
      t.string :weekStatsRecTD
      t.string :weekStatsFumLost
      t.string :weekStatsFumTD
      t.string :seasonStatsPassYds
      t.string :seasonStatsPassTD
      t.string :seasonStatsPassInt
      t.string :seasonStatsRushYds
      t.string :seasonStatsRushTD
      t.string :seasonStatsRecYds
      t.string :seasonStatsRecTD
      t.string :seasonStatsFumLost
      t.string :seasonStatsFumTD

      t.timestamps
    end
  end
end
