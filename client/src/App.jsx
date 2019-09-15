import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import decode from "jwt-decode";

import Teams from "./components/Teams";
import Team from "./components/Team";
import TeamCreate from "./components/TeamCreate";

import Login from "./components/Login";
import Register from "./components/Register";

import {
  createTeam,
  readAllTeams,
  updateTeam,
  destroyTeam,
  loginUser,
  registerUser
} from "./services/api-helper";

import "./App.css";

class App extends Component {
  state = {
    teams: [],
    teamForm: {
      name: ""
    },
    currentUser: null,
    authFormData: {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  };

  getTeams = async () => {
    const teams = await readAllTeams();
    this.setState({
      teams
    });
  };

  newTeam = async e => {
    e.preventDefault();
    const team = await createTeam(this.state.teamForm);
    this.setState(prevState => ({
      teams: [...prevState.teams, team],
      teamForm: {
        name: ""
      }
    }));
  };

  editTeam = async () => {
    const { teamForm } = this.state;
    await updateTeam(teamForm.id, teamForm);
    this.setState(prevState => ({
      teams: prevState.teams.map(team =>
        team.id === teamForm.id ? teamForm : team
      )
    }));
  };

  deleteTeam = async id => {
    await destroyTeam(id);
    this.setState(prevState => ({
      team: prevState.teams.filter(team => team.id !== id)
    }));
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      teamForm: {
        ...prevState.teamForm,
        [name]: value
      }
    }));
  };

  mountEditForm = async id => {
    const teams = await readAllTeams();
    const team = teams.find(el => el.id === parseInt(id));
    this.setState({
      teams,
      teamForm: team
    });
  };

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    });
    localStorage.setItem("jwt", userData.token);
  };

  handleRegister = async e => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  };

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    });
  };

  authHandleChange = async e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  };

  componentDidMount() {
    this.getTeams();
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>
            <Link
              to="/"
              onClick={() =>
                this.setState({
                  teamForm: {
                    name: ""
                  }
                })
              }
            >
              Fantasy Football Tracker App
            </Link>
          </h1>
          <div>
            {this.state.currentUser ? (
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </>
            ) : (
              <button onClick={this.handleLoginButton}>Login / Register</button>
            )}
          </div>
        </header>
        <div className="app-body">
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Teams
                teams={this.state.teams}
                teamForm={this.state.teamForm}
                handleFormChange={this.handleFormChange}
                newTeam={this.newTeam}
              />
            )}
          />
          <Route
            path="/new/team"
            render={() => (
              <TeamCreate
                handleFormChange={this.handleFormChange}
                teamForm={this.state.teamForm}
                newTeam={this.newTeam}
              />
            )}
          />
          <Route
            path="/teams/:id"
            render={props => {
              const { id } = props.match.params;
              const team = this.state.teams.find(el => el.id === parseInt(id));
              return (
                <Team
                  id={id}
                  team={team}
                  handleFormChange={this.handleFormChange}
                  mountEditForm={this.mountEditForm}
                  editTeam={this.editTeam}
                  teamForm={this.state.teamForm}
                  deleteTeam={this.deleteTeam}
                />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);