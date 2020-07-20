import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as ProfileReducer } from "./Profile/state";

/**
 * Add all reducers here so it can be connected to app!
 */
const rootReducer = combineReducers({
  profile: ProfileReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
