import React, { Component } from "react";
import { withRouter } from "react-router";
import Axios from 'axios';


import { getPlayers, readAllTeams } from "../services/api-helper";

class Teams extends Component {
  constructor(props) {
    super(props);zs
    this.state = {
      teams: [],
      refresh: false
    };
  }

  componentDidMount = async () => {
    //   this.renderTeams()
    //   this.setState({teams: this.props.teams.data})
    await this.getTeams()
    console.log(this.state.teams)
  }

//   renderTeams = () => {
//       const getTeams = localStorage.getItem("teams")
//       this.setState({teams: getTeams})
//   }

  getTeams = async () => {
    //   const teams = await readAllTeams()
    const teams = await Axios.get('http://localhost:3000/teams')
      this.setState({teams: teams.data})
    //   console.log('teams getteams',this.state.teams)
  }

  getPlayers = async () => {
      const players = await getPlayers()
  }

  render() {
    //   const teams = this.props.teams.data
    //   const storeTeams = localStorage.setItem("teams", teams)
    //   console.log(storeTeams)
    // console.log('props',this.props)
    const user_id = localStorage.getItem("user_id")
    // console.log('teams jsx user id',user_id)
    // console.log('teams jsx teams-data', this.props.teams.data)
    // console.log(this.state.teams)
    
    return (
      <div className="team-container">
        {this.props.teams.data.map(team => team.user_id == user_id ? (
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
        <div
          className="team-card"
          onClick={() => this.props.history.push("/create/team")}
        >
          <img
            alt="Create a new team"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign"
          />
          <h3>Create a new team</h3>
        </div>
      </div>
    );
    // }
  }
}

export default withRouter(Teams);
