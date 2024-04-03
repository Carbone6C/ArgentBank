// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: "user",
//     initialState: [
//         {id: 1, userName: "Tony Stark", done = false },
//     ],
//     reducers: {
//         addUser: (state, action) => {
//             // { type: "user/addUser", payload: "ajouter utilisateur"}
//             const newUser = {
//                 id: Date.now(),
//                 done: false,
//                 userName: action.payload,
//             };

//             state.push(newUser);
//         },

//         toggleUser: (state, action) => {
//             // { type: "user/toggleUser", payload: "20"}
//             const user = state.find((t) => t.id === action.payload);
//             user.done = !user.done;

//         },

//         deleteUser: (state, action) => {
//             // { type: "user/deleteUser", payload: "20"}
//             state = state.filter((t) => t.id !== action.payload);
//             return state;
//         },
//     }
// });

// const = { addUser, deleteUser, toggleUser } = userSlice.actions;

// export const store = configureStore({
//     reducer: {
//         user: userSlice.reducer,
//     }
// })
