import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux'

function Logout() {
  const dispatch = useDispatch()
  const handleSignOut = (e) => {
    e.preventDefault()

    dispatch(logout())
  }
  // Rendu du composant Logout
  return (
    <div>
      <NavLink to="/dashboard" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {/* Profil Name */}
      </NavLink>
      <NavLink
        to="/"
        className="main-nav-item"
        onClick={(e) => handleSignOut(e)}
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </div>
  )
}

export default Logout
