import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as profileReducer } from "./Profile";

/**
 * Add all reducers here so it can be connected to app!
 */
const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
