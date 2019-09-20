import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { createTeam } from "../services/api-helper"

class TeamCreate extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false,
      teamForm: {
          name: "",
          user_id: this.props.user_id
      },
      newTeam: null
    };
  }

  // handleSubmit = async () => {
  //     await this.props.newTeam()
  //     this.setState({redirect: true})
  //     await this.props.newRedirect()
  // }


  newTeam = async e => {
    e.preventDefault();
    console.log('teamcreate newteam',this.state.teamForm);
    const newTeam = await createTeam(this.state.teamForm);
    // console.log(newTeam)
    this.setState({newTeam: newTeam, redirect: true})
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    const user_id = localStorage.getItem("user_id");
    this.setState(prevState => ({
      teamForm: {
        ...prevState.teamForm,
        [name]: value,
        user_id: user_id
      }
    }));
  };

  render() {
    // console.log("teamcreate props", this.props);

    if (this.state.redirect === false) {
        return (
          <div className="create-form">
            <h2>Create a new team</h2>
            <form onSubmit={this.newTeam}>
              <p>Team's name:</p>
    
              <input
                type="text"
                name="name"
                value={this.state.teamForm.name}
                onChange={this.handleFormChange}
              />
    
              <br />
              <button>Submit</button>
            </form>
          </div>
        );
    } else {
        return (
            <Redirect to={`/teams/${this.state.newTeam.id}`} />
        )
    }




  }
}

export default withRouter(TeamCreate);
