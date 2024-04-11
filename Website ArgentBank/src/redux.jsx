import { configureStore, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
    },
    logout: (state, action) => {
      state.user = null
      state.token = null
    },
  },
})

export const { login, logout } = authSlice.actions
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
