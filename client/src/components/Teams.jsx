import React from 'react';
import { withRouter } from 'react-router';

function Teams(props) {
  return (
    <div className="team-container">
      {props.teams.map(team => (
        <div
          key={team.id}
          className="team-card"
          onClick={() => {
            props.history.push(`/teams/${team.id}`)
            window.scrollTo(0, 0);
          }}>
            <p>{team.name}</p>
        </div>
      ))}
      <div
        className="team-card"
        onClick={() => props.history.push('/new/team')}>
        <img
          alt="Create a new team"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Create a new team</h3>
      </div>
    </div>
  )
}

export default withRouter(Teams)