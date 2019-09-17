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
    this.props.mountEditForm(this.props.id);
    // this.setState({players: this.props.players})
  }

  render() {
    const { team } = this.props;
    // console.log("props in Team", players);
    const players = this.state.players
    console.log(players)
    if (players) {
      return (
        <div>
        <div className="team-page">
          {team === undefined ? (
            <h2>Loading . . .</h2>
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
                <>
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
                </>
              )}
            </div>
          )}
        </div>
        <div className="players-page">
          {this.state.players.map(player => {
            return (
              <div>
                <p>Player Name : {player.name}</p>
                <p>Team : {player.teamAbbr}</p>
                <p>Season Rank : {player.rank}</p>
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
