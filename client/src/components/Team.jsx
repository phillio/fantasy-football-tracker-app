import React, { Component } from 'react';
import TeamEdit from './TeamEdit'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { team } = this.props;
    return (
      <div className="team-page">
        {team === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h1>{team.name}</h1>
            <hr/>
            {this.state.isEdit ?
              <Route path={'/teams/:id/edit'} render={() => (
                <TeamEdit
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editTeam();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/teams/${this.props.teamForm.id}`)
                  }}
                  teamForm={this.props.teamForm} />
              )} />
              :
              <>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/teams/${team.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteTeam(team.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(Team);