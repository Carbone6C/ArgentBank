// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         isLoggedIn: false,
//         user: null
//     },

//     reducers: {
//         login: (state, action) => {
//             // { type: "auth/login", payload: "Tony Stark"}
//             state.isLoggedIn = true
//             state.user = action.payload
//         },

//         logout: (state) => {
//             state.isLoggedIn = false
//             state.user = null
//         },

//     }
// });

// export const { login, logout } = authSlice.actions;
// export const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//     }
// })

// const createToggle = (id) => {
//     return {
//         type: "auth/login"
//         payload: id
//     }
// }
