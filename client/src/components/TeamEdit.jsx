import React from 'react';
import { withRouter } from 'react-router-dom';

function TeamEdit(props) {
  return (
    <div>
      <h3>Edit Team</h3>
      <form onSubmit={props.handleSubmit}>

        <p>Team's name:</p>

        <input
          type="text"
          name="name"
          value={props.teamForm.name}
          onChange={props.handleFormChange} />

        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(TeamEdit);