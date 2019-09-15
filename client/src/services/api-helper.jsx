const baseUrl = 'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData}),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users`, opts)
    .then(resp => resp.json())
}

const createTeam = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/teams`, opts)
    .then(resp => resp.json())
}

const readAllTeams = () => {
  return fetch(`${baseUrl}/teams`)
    .then(resp => resp.json())
    .then(json => json.teams)
}

const readOneTeam = (id) => {
  return fetch(`${baseUrl}/teams/${id}`)
    .then(resp => resp.json())
}

const updateTeam = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/teams/${id}`, opts)
    .then(resp => resp.json())
}

const destroyTeam = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/teams/${id}`, opts)
}

export {
  createTeam,
  readAllTeams,
  readOneTeam,
  updateTeam,
  destroyTeam
}