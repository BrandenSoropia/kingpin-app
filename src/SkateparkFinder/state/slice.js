import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  skateparks: null,
  selectedSkateparkId: null,
};

const skateparkFinderSlice = createSlice({
  name: "skateparkFinder",
  initialState,
  reducers: {
    setSkateparks: {
      reducer: (state, { payload }) => ({
        ...state,
        skateparks: payload?.skateparks,
      }),
      prepare: (skateparks) => ({
        payload: {
          skateparks,
        },
      }),
    },
    setSelectedSkatepark: {
      reducer: (state, { payload }) => ({
        ...state,
        selectedSkateparkId: payload?.skateparkId,
      }),
      prepare: (skateparkId) => ({
        payload: {
          skateparkId,
        },
      }),
    },
  },
});

export const {
  setSkateparks,
  setSelectedSkatepark,
} = skateparkFinderSlice.actions;

export const reducer = skateparkFinderSlice.reducer;
