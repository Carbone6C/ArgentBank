import { NavLink, Link } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'

function Navbar() {
  const loggedIn = false

  // Rendu du composant Header
  return (
    <nav className="main-nav">
      <Link to="/" className="header__logo-link">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </Link>
      <div>
        {!loggedIn && (
          <NavLink to="/signIn" className="main-nav-item">
            <div className="main-nav-logo">
              <i className="fa fa-user-circle"></i>
              Sign In
            </div>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/" className="main-nav-item">
            <div className="main-nav-logo">
              <i className="fa fa-user-circle"></i>
              {/* Profil Name */}
            </div>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/" className="main-nav-item">
            <div className="main-nav-logo">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Navbar
