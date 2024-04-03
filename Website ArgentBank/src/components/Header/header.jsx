import { NavLink, Link } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { useSelector } from 'react-redux'

function Header() {
  const loggedIn = false
  // const users = useSelector((state) => state.user)

  // Rendu du composant Header
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!loggedIn && (
          <NavLink to="/signIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {/* Profil Name */}
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/" className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
