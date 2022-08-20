import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const contactSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		filter: "",
	},
	reducers: {
		add(state, { payload }) {
			state.items.push(payload);
		},
		remove(state, { payload }) {
			state.items = state.items.filter(({ id }) => id !== payload);
		},
		search(state, { payload }) {
			state.filter = payload;
		},
	},
});

const persistConfig = {
	key: "contacts",
	storage,
};

export const contactReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { add, remove, search } = contactSlice.actions;
