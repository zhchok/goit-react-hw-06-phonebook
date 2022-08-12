import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./userSlice";

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});

// export const mySlice = createSlice({
// 	name: "myValue",
// 	initialState: 0,
// 	reducers: {
// 		increment(state, action) {
// 			return state + action.payload;
// 		},
// 		decrement(state, action) {
// 			return state - action.payload;
// 		},
// 	},
// });

// export const { increment, decrement } = mySlice.actions;
