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
