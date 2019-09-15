import React from 'react';
import { withRouter } from 'react-router-dom';

function TeamCreate(props) {
  return (
    <div className="create-form" >
      <h2>Create a new team</h2>
      <form onSubmit={props.newTeam}>

        <p>Team's name:</p>

        <input
          type="text"
          name="name"
          value={props.teamForm.name}
          onChange={props.handleFormChange} />

        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(TeamCreate);