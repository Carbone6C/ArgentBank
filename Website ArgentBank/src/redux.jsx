import { configureStore, createSlice } from '@reduxjs/toolkit'

// Création du slice "auth" avec son état initial
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  },
  reducers: {
    // Reducer pour mettre à jour le token lors de la connexion
    login: (state, action) => {
      const userData = action.payload
      state.token = userData.token
    },
    // Reducer pour déconnecter l'utilisateur
    logout: (state) => {
      state.token = null
      state.firstName = ''
      state.lastName = ''
      state.userName = ''
      state.email = ''
    },
    // Reducer pour mettre à jour les détails de l'utilisateur
    getUser: (state, action) => {
      const userData = action.payload
      state.firstName = userData.firstName || ''
      state.lastName = userData.lastName || ''
      state.userName = userData.userName || ''
      state.email = userData.email || ''
    },
    // Reducer pour changer le nom d'utilisateur
    changeUsername: (state, action) => {
      state.userName = action.payload
    },
    // Reducer pour mettre à jour le token dans le state
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { login, logout, getUser, changeUsername, setToken } =
  authSlice.actions

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export const selectCurrentUser = (state) => state.auth
export const selectCurrentToken = (state) => state.auth.token
export const selectFirstName = (state) => state.auth.firstName
export const selectLastName = (state) => state.auth.lastName
export const selectUserName = (state) => state.auth.userName
