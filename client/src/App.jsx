import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
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
  registerUser,
  getPlayers
} from "./services/api-helper";

import "./App.css";

class App extends Component {
  state = {
    teams: [],
    teamForm: {
      name: "",
      user_id: null
    },
    currentUser: null,
    authFormData: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
    players: [],
    redirect: false
  };

  getTeams = async () => {
    // const teams = await readAllTeams();
    // const players = await getPlayers();
    // this.setState({
    //   teams,
    //   players
    // });
  };

  newTeam = async e => {
    // e.preventDefault();
    // const team = await createTeam(this.state.teamForm);
    // this.setState({
    //   teams: team,
    //   teamForm: {
    //     name: ""
    //   }
    // });
  };

  editTeam = async () => {
    // const { teamForm } = this.state;
    // await updateTeam(teamForm.id, teamForm);
    // this.setState(prevState => ({
    //   teams: prevState.teams.data.map(team =>
    //     team.id === teamForm.id ? teamForm : team
    //   )
    // }));
  };

  deleteTeam = async id => {
    // await destroyTeam(id);
    // const teams = await this.getTeams();
    // this.setState({
    //   teams: teams
    // });
  };

  handleFormChange = e => {
    // const { name, value } = e.target;
    // const user_id = localStorage.getItem("user_id");
    // this.setState(prevState => ({
    //   teamForm: {
    //     ...prevState.teamForm,
    //     [name]: value,
    //     user_id: user_id
    //   }
    // }));
  };

  mountEditForm = async id => {
    // const teams = await readAllTeams();
    // const team = teams.data.find(el => el.id === parseInt(id));
    // this.setState({
    //   teams,
    //   teamForm: team
    // });
  };

  renderRedirect = () => {
    this.setState({
      redirect: true
    });
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  buttonRedirect = () => {
    return <div>{this.renderRedirect()}</div>;
  };

  newTeamRenderRedirect = () => {
    // this.newTeam();
    // this.renderRedirect();
  };
  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  handleLogin = async () => {
    try {
      const userData = await loginUser(this.state.authFormData);
      localStorage.setItem("jwt", userData.token);
      localStorage.setItem("user_id", userData.id);
      const user_id = localStorage.getItem("user_id");
      this.setState({
        teamForm: {
          user_id
        },
        currentUser: decode(userData.token)
      });
    } catch (error) {
      console.log("check login info");
    }
  };

  handleRegister = async e => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  };

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.setState({
      teams: [],
      teamForm: {
        name: "",
        user_id: null
      },
      currentUser: null,
      authFormData: {
        name: "",
        username: "",
        email: "",
        password: ""
      },
      players: [],
      redirect: false
    });
    this.props.history.push("/login");
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

  checkForUser = async () => {
    try {
      await this.getTeams();
      const checkUser = localStorage.getItem("jwt");
      if (checkUser !== "undefined") {
        const user = decode(checkUser);
        const user_id = localStorage.getItem("user_id");
        this.setState({
          currentUser: user,
          teamForm: {
            name: this.state.teamForm.name,
            user_id: user_id
          }
        });
      }
    } catch (error) {
      return console.log("check login");
    }
  };

  componentDidMount = async () => {
    await this.checkForUser();
  };

  render() {
    console.log(this.state)
    return (
      <div className="app-container">

        <header>


          <h1>
            <Link to="/login" onClick={() => this.setState({ teamForm: { name: "" } })}>
              Fantasy Football Tracker App
            </Link>
          </h1>


          <div>
            {this.state.currentUser ? (
              <div>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </div>
            ) : (
              <button onClick={this.handleLoginButton}>Login / Register</button>
            )}
          </div>


        </header>



        <div className="app-body">
         
         
          <Route
            exact
            path="/login"
            render={props => {
              if (!this.state.currentUser) {
                return (
                  <Login
                    handleLogin={this.handleLogin}
                    handleChange={this.authHandleChange}
                    formData={this.state.authFormData}
                  />
                );
              } else {
                return this.buttonRedirect();
              }
            }}
          />


          <Route
            exact
            path="/register"
            render={props => {
              if (!this.state.currentUser) {
                return (
                  <Register
                    handleRegister={this.handleRegister}
                    handleChange={this.authHandleChange}
                    formData={this.state.authFormData}
                  />
                );
              } else {
                return this.buttonRedirect();
              }
            }}
          />




          <Route
            path="/create/team"
            render={() => (
              <TeamCreate/>
            )}
          />
          <Route
            path="/teams/:id"
            render={props => {
              const { id } = props.match.params;
                return (
                  <Team />
                );
              }
            }
          />


          
        </div>



      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="app-container">
  //       <header>
  //         <h1>
  //           <Link
  //             to="/login"
  //             onClick={() =>
  //               this.setState({
  //                 teamForm: {
  //                   name: ""
  //                 }
  //               })
  //             }
  //           >
  //             Fantasy Football Tracker App
  //           </Link>
  //         </h1>
  //         <div>
  //           {this.state.currentUser ? (
  //             <>
  //               <p>{this.state.currentUser.username}</p>
  //               <button onClick={this.handleLogout}>Logout</button>
  //             </>
  //           ) : (
  //             <button onClick={this.handleLoginButton}>Login / Register</button>
  //           )}
  //         </div>
  //       </header>
  //       <div className="app-body">
  //         <Route
  //           exact
  //           path="/login"
  //           render={props => {
  //             if (!this.state.currentUser) {
  //               return (
  //                 <Login
  //                   handleLogin={this.handleLogin}
  //                   handleChange={this.authHandleChange}
  //                   formData={this.state.authFormData}
  //                 />
  //               );
  //             } else {
  //               return this.buttonRedirect();
  //             }
  //           }}
  //         />

  //         <Route
  //           exact
  //           path="/register"
  //           render={props => {
  //             if (!this.state.currentUser) {
  //               return (
  //                 <Register
  //                   handleRegister={this.handleRegister}
  //                   handleChange={this.authHandleChange}
  //                   formData={this.state.authFormData}
  //                 />
  //               );
  //             } else {
  //               return this.buttonRedirect();
  //             }
  //           }}
  //         />
  //         
  //         <Route
  //           path="/create/team"
  //           render={() => (
  //             <TeamCreate
  //               user_id={this.state.teamForm.user_id}
  //               handleFormChange={this.handleFormChange}
  //               teamForm={this.state.teamForm}
  //               newTeam={this.newTeam}
  //               newRedirect={this.newTeamRenderRedirect}
  //               teams={this.state.teams}
  //             />
  //           )}
  //         />
  //         <Route
  //           path="/teams/:id"
  //           render={props => {
  //             const { id } = props.match.params;
  //             let team;
  //             let players;

  //             if (!this.state.currentUser) {
  //               return <Redirect path="/login" />;
  //             } else {
  //               console.log('this is my message', this.state)
  //               if (this.state.teams.data) {
  //                 team = this.state.teams.data.find(
  //                   el => el.id === parseInt(id)
  //                 );
  //                 players = this.state.players.data;
  //               } else {
  //               }
  //               return (
  //                 <Team
  //                   id={id}
  //                   team={team}
  //                   handleFormChange={this.handleFormChange}
  //                   mountEditForm={this.mountEditForm}
  //                   editTeam={this.editTeam}
  //                   teamForm={this.state.teamForm}
  //                   deleteTeam={this.deleteTeam}
  //                   players={players}
  //                   saveTeam={this.saveTeam}
  //                 />
  //               );
  //             }
  //           }}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
}

export default withRouter(App);
