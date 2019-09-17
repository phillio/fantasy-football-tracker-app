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
    console.log('propsid',this.props.id)
    this.props.mountEditForm(this.props.id);
    // this.setState({players: this.props.players})
  }

  render() {
    const { team } = this.props;
    // console.log("props in Team", players);
    const players = this.state.players
    // console.log(players)
    if (players) {
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
                      this.props.history.push("/");
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
          {this.state.players.map(player => {
            return (
              <div className="player-card">
                <p>Player Name</p>
                <p>Team</p>
                <p>Position</p>
                <p>Owned %</p>
                <p>SEASON Rank</p>
                <p>Ssn Points</p>
                <p>Ssn Projection</p>
                <p>WEEK #</p>
                <p>Wk's Points</p>
                <p>Wk's Proj. Pts</p>
                <p>Wk's Pass Yds</p>
                <p>Wk's Pass TDs</p>
                <p>Wk's Pass Int</p>
                <p>Wk's Rush Yds</p>
                <p>Wk's Rush TD</p>
                <p>Wk's Rec. Yd</p>
                <p>Wk's Rec. TD</p>
                <p>Wk's Fum. Lost</p>
                <p>Wk's Fum. TD</p>
                <p>Ssn's Pass Yds</p>
                <p>Ssn's Pass TDs</p>
                <p>Ssn's Pass Int</p>
                <p>Ssn's Rush Yds</p>
                <p>Ssn's Rush TD</p>
                <p>Ssn's Rec. Yd</p>
                <p>Ssn's Rec. TD</p>
                <p>Ssn's Fum. Lost</p>
                <p>Ssn's Fum. TD</p>
              </div>
            );
          })}
        </div>
      </div>
      )
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
