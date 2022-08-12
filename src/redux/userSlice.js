import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		login: "",
		inLoggedIn: false,
	},
	reducers: {
		logIn(state, action) {
			state.login = action.payload;
			state.inLoggedIn = true;
		},
		logOut(state) {
			state.login = "";
			state.inLoggedIn = "false";
		},
	},
});

export const { logIn, logOut } = userSlice.actions;
