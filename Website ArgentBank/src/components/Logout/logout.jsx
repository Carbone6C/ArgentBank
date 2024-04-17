import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, selectUserName } from '../../redux'
import { useSelector } from 'react-redux'

function Logout() {
  // Données du store Redux
  const userName = useSelector(selectUserName)

  // Dispatch Redux
  const dispatch = useDispatch()

  // Fonction qui gére la deconnexion de l'utilisateur
  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch(logout())
    localStorage.removeItem('token')
    window.location.href = '/signIn'
  }

  // Rendu du composant Logout
  return (
    <div>
      <NavLink to="/dashboard" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {userName}
      </NavLink>
      <NavLink
        to="/signIn"
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
