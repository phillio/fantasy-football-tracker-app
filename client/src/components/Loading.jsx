import React from 'react';
import { withRouter } from 'react-router';

function Loading() {
  return (
    <div className="loading-container">
      <p>NO TEAMS YET</p>
    </div>
  )
}

export default withRouter(Loading)