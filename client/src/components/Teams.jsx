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

  async componentDidUpdate() {
    if (this.props.deletedTeam) {
      const updatedTeams = await readAllTeams()
      this.setState({teams: updatedTeams.data})
    }
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

    // console.log('props',this.props)
    // console.log('state',this.state)
    return (
      <div className="team-container">
        <Link
          to="/create/team"
          className="team-card"
        >
        <h3 className="team-create" >Create a new team</h3>
        </Link>
        {this.state.teams.map(team => team.user_id == user_id ? (
          <div
            key={team.id}
            className="team-card"
            onClick={() => {
              this.props.history.push(`/teams/${team.id}`);
            }}
          >
            <h3>{team.name}</h3>
          </div>
        ) : null
        )}
      </div>
    );
    // }
  }
}

export default withRouter(Teams);
