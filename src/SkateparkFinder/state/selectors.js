import { createSelector } from "@reduxjs/toolkit";

export const selectSkateFinder = (state) => state?.skateparkFinder;

export const selectSkateparks = createSelector(
  selectSkateFinder,
  (skateFinder) => skateFinder?.skateparks
);

export const selectSelectedSkateparkId = createSelector(
  selectSkateFinder,
  (skateFinder) => skateFinder?.selectedSkateparkId
);

export const selectSelectedSkatepark = createSelector(
  [selectSkateparks, selectSelectedSkateparkId],
  (skateparks, selectedSkateparkId) => skateparks[selectedSkateparkId]
);
