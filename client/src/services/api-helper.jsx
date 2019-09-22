import Axios from "axios";
const baseUrl = "https://fantasy-football-tracker-app.herokuapp.com";

export const loginUser = loginData => {
  const opts = {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts).then(resp => resp.json());
};

export const registerUser = registerData => {
  const opts = {
    method: "POST",
    body: JSON.stringify({ user: registerData }),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`${baseUrl}/users`, opts).then(resp => resp.json());
};

const createTeam = data => {
  const opts = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  // console.log(opts)
  return fetch(`${baseUrl}/teams`, opts).then(resp => resp.json());
};

const readAllTeams = async () => {
  try {
    const teams = await Axios.get(`${baseUrl}/teams`)
    return teams

  } catch (error) {
    throw error
  }
};

const readOneTeam = id => {
  return fetch(`${baseUrl}/teams/${id}`).then(resp => resp.json());
};

const updateTeam = (id, data) => {
  const opts = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(`${baseUrl}/teams/${id}`, opts).then(resp => resp.json());
};

const destroyTeam = id => {
  const opts = {
    method: "DELETE"
  };
  return fetch(`${baseUrl}/teams/${id}`, opts);
};

const getPlayers = async () => {
  try {
    const players = await Axios.get(`${baseUrl}/players`)
    // console.log('api-helper getplayrs', players)
    return players
    // console.log(players)
    

    // const resp = await fetch(`${baseUrl}/players`)
    // console.log(resp)

  } catch (error) {
    throw error
  }
};

export { createTeam, readAllTeams, readOneTeam, updateTeam, destroyTeam, getPlayers };
