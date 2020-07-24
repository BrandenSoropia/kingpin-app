import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  tricks: null,
  selectedTrickId: null,
};

const trickTrackerSlice = createSlice({
  name: "trickTracker",
  initialState,
  reducers: {
    setTricks: {
      reducer: (state, { payload }) => ({
        ...state,
        tricks: payload?.tricks,
      }),
      prepare: (tricks) => ({
        payload: {
          tricks,
        },
      }),
    },
    setSelectedTrickId: {
      reducer: (state, { payload }) => ({
        ...state,
        selectedTrickId: payload?.selectedTrickId,
      }),
      prepare: (selectedTrickId) => ({
        payload: {
          selectedTrickId,
        },
      }),
    },
  },
});

export const { setTricks, setSelectedTrickId } = trickTrackerSlice.actions;

export const reducer = trickTrackerSlice.reducer;
