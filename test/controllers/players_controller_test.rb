require 'test_helper'

class PlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player = players(:one)
  end

  test "should get index" do
    get players_url, as: :json
    assert_response :success
  end

  test "should create player" do
    assert_difference('Player.count') do
      post players_url, params: { player: { fantasyProjectedPtsSeason: @player.fantasyProjectedPtsSeason, fantasyProjectedPtsWeek: @player.fantasyProjectedPtsWeek, fantasyProjectedPtsWeekValue: @player.fantasyProjectedPtsWeekValue, fantasyPtsSeason: @player.fantasyPtsSeason, fantasyPtsWeek: @player.fantasyPtsWeek, fantasyPtsWeekValue: @player.fantasyPtsWeekValue, name: @player.name, percentOwned: @player.percentOwned, rosterSlot: @player.rosterSlot, seasonRank: @player.seasonRank, seasonStatsFumLost: @player.seasonStatsFumLost, seasonStatsFumTD: @player.seasonStatsFumTD, seasonStatsPassInt: @player.seasonStatsPassInt, seasonStatsPassTD: @player.seasonStatsPassTD, seasonStatsPassYds: @player.seasonStatsPassYds, seasonStatsRecTD: @player.seasonStatsRecTD, seasonStatsRecYds: @player.seasonStatsRecYds, seasonStatsRushTD: @player.seasonStatsRushTD, seasonStatsRushYds: @player.seasonStatsRushYds, teamAbbr: @player.teamAbbr, weekStatsFumLost: @player.weekStatsFumLost, weekStatsFumTD: @player.weekStatsFumTD, weekStatsPassInt: @player.weekStatsPassInt, weekStatsPassTD: @player.weekStatsPassTD, weekStatsPassYds: @player.weekStatsPassYds, weekStatsRecTD: @player.weekStatsRecTD, weekStatsRecYds: @player.weekStatsRecYds, weekStatsRushTD: @player.weekStatsRushTD, weekStatsRushYds: @player.weekStatsRushYds } }, as: :json
    end

    assert_response 201
  end

  test "should show player" do
    get player_url(@player), as: :json
    assert_response :success
  end

  test "should update player" do
    patch player_url(@player), params: { player: { fantasyProjectedPtsSeason: @player.fantasyProjectedPtsSeason, fantasyProjectedPtsWeek: @player.fantasyProjectedPtsWeek, fantasyProjectedPtsWeekValue: @player.fantasyProjectedPtsWeekValue, fantasyPtsSeason: @player.fantasyPtsSeason, fantasyPtsWeek: @player.fantasyPtsWeek, fantasyPtsWeekValue: @player.fantasyPtsWeekValue, name: @player.name, percentOwned: @player.percentOwned, rosterSlot: @player.rosterSlot, seasonRank: @player.seasonRank, seasonStatsFumLost: @player.seasonStatsFumLost, seasonStatsFumTD: @player.seasonStatsFumTD, seasonStatsPassInt: @player.seasonStatsPassInt, seasonStatsPassTD: @player.seasonStatsPassTD, seasonStatsPassYds: @player.seasonStatsPassYds, seasonStatsRecTD: @player.seasonStatsRecTD, seasonStatsRecYds: @player.seasonStatsRecYds, seasonStatsRushTD: @player.seasonStatsRushTD, seasonStatsRushYds: @player.seasonStatsRushYds, teamAbbr: @player.teamAbbr, weekStatsFumLost: @player.weekStatsFumLost, weekStatsFumTD: @player.weekStatsFumTD, weekStatsPassInt: @player.weekStatsPassInt, weekStatsPassTD: @player.weekStatsPassTD, weekStatsPassYds: @player.weekStatsPassYds, weekStatsRecTD: @player.weekStatsRecTD, weekStatsRecYds: @player.weekStatsRecYds, weekStatsRushTD: @player.weekStatsRushTD, weekStatsRushYds: @player.weekStatsRushYds } }, as: :json
    assert_response 200
  end

  test "should destroy player" do
    assert_difference('Player.count', -1) do
      delete player_url(@player), as: :json
    end

    assert_response 204
  end
end
