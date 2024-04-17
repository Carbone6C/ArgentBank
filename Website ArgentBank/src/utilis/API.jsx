// Fonction qui extrait les données status, message et le token de la réponse de l'API après une connexion.

export function getApiLoginData(data) {
  if (data.status !== 400) {
    const object = {
      status: data.status,
      message: data.message,
      token: data.body.token,
    }

    return object
  } else {
    const object = {
      status: data.status,
      message: data.message,
    }

    return object
  }
}

// Fonction d'envoi des données à l'API

export const getLogin = async (id) => {
  const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  }).then((response) => response.json())

  return getApiLoginData(loginResponse)
}

// Fonction d'envoi de token à l'API pour recevoir les données utilisateurs

export const fetchUserDetails = async (token) => {
  const userDetailsResponse = await fetch(
    'http://localhost:3001/api/v1/user/profile',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json())

  return getUserDetails(userDetailsResponse)
}

// Fonction qui extrait les données utilisateurs de la réponse API.

export function getUserDetails(data) {
  if (data.body !== undefined) {
    const object = {
      status: data.status,
      email: data.body.email,
      firstName: data.body.firstName,
      lastName: data.body.lastName,
      userName: data.body.userName,
    }

    return object
  } else {
    const object = {
      status: 0,
      email: '',
      firstName: '',
      lastName: '',
      userName: '',
    }

    return object
  }
}

// Fonction d'envoi de l'username à l'API pour modification de l'username

export const saveUserProfil = async (token, userName) => {
  const userProfilResponse = await fetch(
    'http://localhost:3001/api/v1/user/profile',
    {
      body: JSON.stringify(userName),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'PUT',
    }
  ).then((response) => response.json())

  return userProfilData(userProfilResponse)
}

// Fonction qui extrait le statut et le message de la réponse API.

export function userProfilData(data) {
  const object = {
    status: data.status,
    message: data.message,
  }

  return object
}
