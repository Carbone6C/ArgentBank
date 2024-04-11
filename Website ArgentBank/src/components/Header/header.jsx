import argentBankLogo from '../../assets/img/argentBankLogo.png'
import Login from '../Login/login'
import Logout from '../Logout/logout'

import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux'

function Header() {
  const user = useSelector(selectCurrentUser)

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
      {user ? <Logout /> : <Login />}
    </nav>
  )
}

export default Header
