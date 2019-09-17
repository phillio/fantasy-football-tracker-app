import React from 'react';
import { withRouter } from 'react-router';

function Players(props) {
  return (
      {props.players.map(player => (
    <div className="players-container">
        <h6>Player List</h6>
        <div
          key={player.id}
          className="player-card"
          onClick={() => {
            props.history.push(`/players/${player.id}`)
            window.scrollTo(0, 0);
          }}>
            <p>{player.name}</p>
        </div>
      ))}
      <div
        className="player-card"
        onClick={() => props.history.push('/new/player')}>
        <h3>Pick a player</h3>
      </div>
    </div>
  )
}

export default withRouter(Players)