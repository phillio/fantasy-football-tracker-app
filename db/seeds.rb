def get_players
# Retrieves player data
    require 'uri'
    require 'net/http'
    require 'openssl'
    require 'JSON'

    # https://www.twilio.com/blog/2015/10/4-ways-to-parse-a-json-api-with-ruby.html
    require 'httparty'

    league_id = ENV['LEAGUE_ID']
    auth_token = ENV['AUTH_TOKEN']

    url = "https://api.fantasy.nfl.com/v1/league/players?leagueId=#{league_id}&count=500&sort=yes&authToken=#{auth_token}&format=json"
    
    response = HTTParty.get(url)
    puts response
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
            rank: player['ranks'], 
            fantasyPts: player['fantasyPts'], 
            fantasyProjectedPts: player['fantasyProjectedPts'],
            weekStats: player['weekStats'], 
            seasonStats: player['seasonStats'])
    end

end

get_players