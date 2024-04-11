import { NavLink } from 'react-router-dom'

function Login() {
  // Rendu du composant Login
  return (
    <div>
      <NavLink to="/signIn" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </div>
  )
}

export default Login
