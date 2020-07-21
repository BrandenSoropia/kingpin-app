import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  skateparks: null,
  selectedSkateparkId: null,
};

/**
 * Turn the array of skateparks into a hash map by using
 * a skatepark's id as key and value being an object of the
 * rest of its properties.
 *
 * Return an empty array if given empty array/null.
 *
 * --- Why? ---
 * Note this is only because this data is served on Frontend ATM. I figured that if
 * the Frontend is given a large array of skatepark data,
 * this'd make it faster to find a specific skatepark.
 *
 * Ideally I think the Backend would serve it in this format. Or even better,
 * Frontend just requests for a specific skatepark via id when finding a park.
 * This way, the most up to date skatepark data is received.
 */
const formatSkateparks = (skateparks) => {
  if (!skateparks || !skateparks.length) {
    return [];
  }

  return skateparks.reduce((hashmap, skatepark) => {
    const { id, ...rest } = skatepark;

    return {
      ...hashmap,
      [id]: {
        ...rest,
      },
    };
  }, {});
};

const skateparkFinderSlice = createSlice({
  name: "skateparkFinder",
  initialState: initialState,
  reducers: {
    setSkateparks: {
      reducer: (state, { payload }) => ({
        ...state,
        skateparks: formatSkateparks(payload?.skateparks),
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
