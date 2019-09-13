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
      post players_url, params: { player: { fantasyProjectedPts: @player.fantasyProjectedPts, fantasyPts: @player.fantasyPts, name: @player.name, percentOwned: @player.percentOwned, rank: @player.rank, rosterSlot: @player.rosterSlot, seasonStats: @player.seasonStats, teamAbbr: @player.teamAbbr, weekStats: @player.weekStats } }, as: :json
    end

    assert_response 201
  end

  test "should show player" do
    get player_url(@player), as: :json
    assert_response :success
  end

  test "should update player" do
    patch player_url(@player), params: { player: { fantasyProjectedPts: @player.fantasyProjectedPts, fantasyPts: @player.fantasyPts, name: @player.name, percentOwned: @player.percentOwned, rank: @player.rank, rosterSlot: @player.rosterSlot, seasonStats: @player.seasonStats, teamAbbr: @player.teamAbbr, weekStats: @player.weekStats } }, as: :json
    assert_response 200
  end

  test "should destroy player" do
    assert_difference('Player.count', -1) do
      delete player_url(@player), as: :json
    end

    assert_response 204
  end
end
