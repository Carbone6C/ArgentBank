import Account from '../../components/Account/account'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserDetails, saveUserProfil } from '../../utilis/API'
import {
  selectCurrentToken,
  getUser,
  selectFirstName,
  selectLastName,
  selectUserName,
  changeUsername,
  setToken,
} from '../../redux'

function Dashboard() {
  // State pour le mode édition
  const [isEditing, setIsEditing] = useState(false)
  // State pour modification du username
  const [newUserName, setNewUserName] = useState('')
  // Dispatch Redux
  const dispatch = useDispatch()
  // Données du store Redux
  const token = useSelector(selectCurrentToken)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const userName = useSelector(selectUserName)

  // Vérification du token dans le localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      dispatch(setToken(storedToken))
    }
  }, [dispatch])

  // Chargement des données de l'utilisateur grâce au token
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUserDetails(token)
        dispatch(getUser(userData))
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }

    fetchUserData()
  }, [token, dispatch])

  // Fonctions du mode édition (Activation, Sauvegarde, Annulation)
  const handleEdit = () => {
    setIsEditing(true)
  }
  const handleEditSave = () => {
    setIsEditing(false)
    dispatch(changeUsername(newUserName))
    saveUserProfil(token, { userName: newUserName })
  }
  const handleEditCancel = () => {
    setIsEditing(false)
  }
  // Rendu de la page Dashboard
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome
          <br />
          <span id="fullName">
            {firstName} {lastName}
          </span>
        </h1>
        {!isEditing && (
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
        {isEditing && (
          <div id="edit-section">
            <input
              type="text"
              placeholder={userName}
              onChange={(e) => setNewUserName(e.target.value)}
              required
            />
            <div id="button-flex">
              <button className="save-button" onClick={handleEditSave}>
                Save
              </button>
              <button className="cancel-button" onClick={handleEditCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  )
}

export default Dashboard
