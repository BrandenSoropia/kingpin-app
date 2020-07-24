import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Feature Reducers
import { reducer as ProfileReducer } from "./Profile/state";
import { reducer as SkateparkFinderReducer } from "./SkateparkFinder/state";
import { reducer as TrickTrackerReducer } from "./TrickTracker/state";

/**
 * Add all reducers here so it can be connected to app!
 */
const rootReducer = combineReducers({
  profile: ProfileReducer,
  skateparkFinder: SkateparkFinderReducer,
  trickTracker: TrickTrackerReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
