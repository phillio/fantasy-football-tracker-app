import React, { Component } from "react";
import { withRouter } from "react-router";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
      this.setState({teams: this.props.teams.data})
  }

  renderTeams() {}

  render() {

    return (
      <div className="team-container">
        {this.props.teams.data.map(team => (
          <div
            key={team.id}
            className="team-card"
            onClick={() => {
              this.props.history.push(`/teams/${team.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <p>{team.name}</p>
          </div>
        ))}
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
