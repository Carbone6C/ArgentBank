import { useSelector, useDispatch } from 'react-redux'
import { getLogin } from '../../utilis/API'
import { login, selectCurrentToken } from '../../redux'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function SignIn() {
  // Déclaration des useState pour stocker les identifiants, le" remember me", le status et les erreurs de connexion.
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [remember, setRemember] = useState(false)
  let [signInError, setSignInError] = useState('')
  let [loginStatus, setLoginStatus] = useState(0)

  //Extraction du token de redux
  const token = useSelector(selectCurrentToken)

  //Dispactch des actions Redux
  const dispatch = useDispatch()

  useEffect(() => {
    const addToken = (token) => {
      if (remember === true) {
        localStorage.setItem('token', token)
      }
    }

    if (token) {
      addToken(token)
    }
  }, [token, remember, dispatch])

  const handleRemember = (event) => {
    setRemember(event.target.checked)
  }

  // Fonction du submit du formulaire de connexion
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginResponse = await getLogin({ email: email, password: password })
      if (loginResponse.status !== 400) {
        setLoginStatus(loginResponse.status)
        dispatch(
          login({ user: loginResponse.user, token: loginResponse.token })
        )
      } else {
        setSignInError(loginResponse.message)
      }
    } catch (error) {
      console.error('Error occurred during login:', error)
    }
  }
  //Verification du token pour rediriger l'utilisateur si la connexion reussie
  if (loginStatus === 200) {
    return <Navigate to="/dashboard" />
  }

  // Rendu de la page SignIn
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={handleRemember} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {signInError && <p className="error">{signInError}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default SignIn
