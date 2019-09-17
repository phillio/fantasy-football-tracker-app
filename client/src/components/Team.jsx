import React, { Component } from "react";
import TeamEdit from "./TeamEdit";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      players: props.players
    };
  }

  componentDidMount() {
    // this.renderPlayers()
    this.props.mountEditForm(this.props.id);
    // this.setState({players: this.props.players})
  }

  // renderPlayers() {
  //     const getPlayers = localStorage.getItem("players")
  //     this.setState({teams: getPlayers})
  // }

  render() {
    const { team } = this.props;
    // console.log("props in Team", players);
    const players = this.state.players;
    // console.log(players)
    if (players) {
      // const storePlayers = localStorage.setItem("players", players)
      // console.log(storePlayers)
      return (
        <div className="team-wrapper">
          <div className="team-page">
            {team === undefined ? (
              <h2>Fantasy Football Research...</h2>
            ) : (
              <div>
                <h1>{team.name}</h1>
                <hr />
                {this.state.isEdit ? (
                  <Route
                    path={"/teams/:id/edit"}
                    render={() => (
                      <TeamEdit
                        handleFormChange={this.props.handleFormChange}
                        handleSubmit={e => {
                          e.preventDefault();
                          this.props.editTeam();
                          this.setState({ isEdit: false });
                          this.props.history.push(
                            `/teams/${this.props.teamForm.id}`
                          );
                        }}
                        teamForm={this.props.teamForm}
                      />
                    )}
                  />
                ) : (
                  <div className="player-list">
                    <button
                      onClick={() => {
                        this.setState({
                          isEdit: true
                        });
                        this.props.history.push(`/teams/${team.id}/edit`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        this.props.deleteTeam(team.id);
                        this.props.history.push("/login");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="players-page">
            <div className="players-page-columns">
              <p className="p-columns p-name">Player Name</p>
              <p className="p-columns p-team">Team</p>
              <p className="p-columns p-pos">Position</p>
              <p className="p-columns p-own">Own %</p>
              <p className="p-columns p-rank">SEASON Rank</p>
              <p className="p-columns p-totalpts">Season Points</p>
              <p className="p-columns p-ssnproj">Season Projection</p>
              <p className="p-columns p-wknum">WEEK #</p>
              <p className="p-columns p-wkpts">Wk's Points</p>
              <p className="p-columns p-wkproj">Wk's Proj. Pts</p>
              <p className="p-columns p-wkpassyds">Wk's Pass Yds</p>
              <p className="p-columns p-wkpasstd">Wk's Pass TDs</p>
              <p className="p-columns p-wkpassint">Wk's Pass Int</p>
              <p className="p-columns p-wkrushyds">Wk's Rush Yds</p>
              <p className="p-columns p-wkrushtd">Wk's Rush TD</p>
              <p className="p-columns p-wkrecyd">Wk's Rec. Yd</p>
              <p className="p-columns p-wkrectd">Wk's Rec. TD</p>
              <p className="p-columns p-wkfum">Wk's Fum. Lost</p>
              <p className="p-columns p-wkfumtd">Wk's Fum. TD</p>
              <p className="p-columns p-ssnpassyds">Ssn's Pass Yds</p>
              <p className="p-columns p-ssnpasstd">Ssn's Pass TDs</p>
              <p className="p-columns p-ssnpassint">Ssn's Pass Int</p>
              <p className="p-columns p-ssnrushyds">Ssn's Rush Yds</p>
              <p className="p-columns p-ssnrushtd">Ssn's Rush TD</p>
              <p className="p-columns p-ssnrecyd">Ssn's Rec. Yd</p>
              <p className="p-columns p-ssnrectd">Ssn's Rec. TD</p>
              <p className="p-columns p-ssnfum">Ssn's Fum. Lost</p>
              <p className="p-columns p-ssnfumtd">Ssn's Fum. TD</p>
            </div>
            {this.state.players.map(player => {
              return <div className="player-card">
              <p className="p-columns p-name">{player.name}</p>
              <p className="p-columns p-team">{player.teamAbbr}</p>
              <p className="p-columns p-pos">{player.rosterSlot}</p>
              <p className="p-columns p-own">{player.percentOwned}</p>
              <p className="p-columns p-rank">{player.seasonRank}</p>
              <p className="p-columns p-totalpts">{player.fantasyPtsSeason}</p>
              <p className="p-columns p-ssnproj">{player.fantasyProjectedPtsSeason}</p>
              <p className="p-columns p-wknum">{player.fantasyPtsWeek}</p>
              <p className="p-columns p-wkpts">{player.fantasyPtsWeekValue}</p>
              <p className="p-columns p-wkproj">{player.fantasyProjectedPtsWeekValue}</p>
              <p className="p-columns p-wkpassyds">{player.weekStatsPassYds}</p>
              <p className="p-columns p-wkpasstd">{player.weekStatsPassTD}</p>
              <p className="p-columns p-wkpassint">{player.weekStatsPassInt}</p>
              <p className="p-columns p-wkrushyds">{player.weekStatsRushYds}</p>
              <p className="p-columns p-wkrushtd">{player.weekStatsRushTD}</p>
              <p className="p-columns p-wkrecyd">{player.weekStatsRecYds}</p>
              <p className="p-columns p-wkrectd">{player.weekStatsRecTD}</p>
              <p className="p-columns p-wkfum">{player.weekStatsFumLost}</p>
              <p className="p-columns p-wkfumtd">{player.weekStatsFumTD}</p>
              <p className="p-columns p-ssnpassyds">{player.seasonStatsPassYds}</p>
              <p className="p-columns p-ssnpasstd">{player.seasonStatsPassTD}</p>
              <p className="p-columns p-ssnpassint">{player.seasonStatsPassInt}</p>
              <p className="p-columns p-ssnrushyds">{player.seasonStatsRushYds}</p>
              <p className="p-columns p-ssnrushtd">{player.seasonStatsRushTD}</p>
              <p className="p-columns p-ssnrecyd">{player.seasonStatsRecYds}</p>
              <p className="p-columns p-ssnrectd">{player.seasonStatsRecTD}</p>
              <p className="p-columns p-ssnfum">{player.seasonStatsFumLost}</p>
              <p className="p-columns p-ssnfumtd">{player.seasonStatsFumTD}</p>
              </div>;
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>uhoh</p>
        </div>
      );
    }
  }
}

export default withRouter(Team);
