def get_players
# Retrieves player data
    require 'uri'
    require 'net/http'
    require 'openssl'
    require 'json'

    # https://www.twilio.com/blog/2015/10/4-ways-to-parse-a-json-api-with-ruby.html
    require 'httparty'

    # User.create(name: 'Phil', email: 'phil@fakemail.com', password: 'phil123', username: 'phil')
    # Team.create(name: 'champs', user_id: 1)

    league_id = ENV['LEAGUE_ID']
    auth_token = ENV['AUTH_TOKEN']

    url = "https://api.fantasy.nfl.com/v1/league/players?leagueId=#{league_id}&count=500&sort=yes&authToken=#{auth_token}&format=json"
    puts url
    response = HTTParty.get(url)
    
    response.parsed_response

    parsed_json = JSON.parse(response.body)

    nfl_league = parsed_json['leagues'][0]

    nfl_players = nfl_league['players']
    
    nfl_players.each do |player|
        Player.create(
            name: player['name'], 
            teamAbbr: player['teamAbbr'], 
            rosterSlot: player['position'], 
            percentOwned: player['percentOwned'], 
            seasonRank: player['ranks']['season']['rank'],
            fantasyPtsSeason: player['fantasyPts']['season']['pts'],
            fantasyPtsWeek: player['fantasyPts']['week']['week'],
            fantasyPtsWeekValue: player['fantasyPts']['week']['pts'],
            fantasyProjectedPtsSeason: player['fantasyProjectedPts']['season']['pts'],
            fantasyProjectedPtsWeek: player['fantasyProjectedPts']['week']['week'],
            fantasyProjectedPtsWeekValue: player['fantasyProjectedPts']['week']['pts'],
            weekStatsPassYds: player['weekStats']['passYds'],
            weekStatsPassTD: player['weekStats']['passTD'],
            weekStatsPassInt: player['weekStats']['int'],
            weekStatsRushYds: player['weekStats']['rushYds'],
            weekStatsRushTD: player['weekStats']['rushTD'],
            weekStatsRecYds: player['weekStats']['rushYds'],
            weekStatsRecTD: player['weekStats']['recTD'],
            weekStatsFumLost: player['weekStats']['fumLost'],
            weekStatsFumTD: player['weekStats']['fumTD'],
            seasonStatsPassYds: player['seasonStats']['passYds'],
            seasonStatsPassTD: player['seasonStats']['passTD'],
            seasonStatsPassInt: player['seasonStats']['int'],
            seasonStatsRushYds: player['seasonStats']['rushYds'],
            seasonStatsRushTD: player['seasonStats']['rushTD'],
            seasonStatsRecYds: player['seasonStats']['rushYds'],
            seasonStatsRecTD: player['seasonStats']['recTD'],
            seasonStatsFumLost: player['seasonStats']['fumLost'],
            seasonStatsFumTD: player['seasonStats']['fumTD'],)
    end

end

get_players
