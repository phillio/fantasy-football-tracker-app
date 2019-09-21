import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


import { getPlayers, readAllTeams } from "../services/api-helper";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      refresh: false,
      players: []
    };
  }

  componentDidMount = async () => {
    await this.getTeams()
    await this.getPlayers()
  }

  getTeams = async () => {
      const teams = await readAllTeams()
      this.setState({teams: teams.data})
  }

  getPlayers = async () => {
      const players = await getPlayers()
      this.setState({players: players.data})
  }

  render() {
    const user_id = localStorage.getItem("user_id")

    return (
      <div className="team-container">
        {this.state.teams.map(team => team.user_id == user_id ? (
          <div
            key={team.id}
            className="team-card"
            onClick={() => {
              this.props.history.push(`/teams/${team.id}`);
            }}
          >
            <p>{team.name}</p>
          </div>
        ) : null
        )}
        <Link
          to="/create/team"
          className="team-card"
        >
          <img
            alt="Create a new team"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign"
          />
          <h3>Create a new team</h3>
        </Link>
      </div>
    );
    // }
  }
}

export default withRouter(Teams);
