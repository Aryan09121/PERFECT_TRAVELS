import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const ownerReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("GET_OWNERS_REQUEST", (state) => {
			state.loading = true;
		})
		.addCase("GET_OWNERS_SUCCESS", (state, action) => {
			state.loading = false;
			state.owners = action.payload.owners;
		})
		.addCase("GET_OWNERS_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase("GET_OWNER_BY_ID_REQUEST", (state) => {
			state.loading = true;
		})
		.addCase("GET_OWNER_BY_ID_SUCCESS", (state, action) => {
			state.loading = false;
			state.owner = action.payload.owner;
			state.message = action.payload.message;
		})
		.addCase("GET_OWNER_BY_ID_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase("ADD_OWNER_REQUEST", (state) => {
			state.loading = true;
		})
		.addCase("ADD_OWNER_SUCCESS", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("ADD_OWNER_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase("ADD_MULTIPLE_OWNER_REQUEST", (state) => {
			state.loading = true;
		})
		.addCase("ADD_MULTIPLE_OWNER_SUCCESS", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("ADD_MULTIPLE_OWNER_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase("UPDATE_OWNER_RATE_REQUEST", (state) => {
			state.loading = true;
		})
		.addCase("UPDATE_OWNER_RATE_SUCCESS", (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
		})
		.addCase("UPDATE_OWNER_RATE_FAILURE", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase("CLEAR_ERRORS", (state) => {
			state.error = null;
		})
		.addCase("CLEAR_MESSAGES", (state) => {
			state.message = null;
		});
});
