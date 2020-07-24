import { createSelector } from "@reduxjs/toolkit";

export const selectTrickTracker = (state) => state.trickTracker;

export const selectTricks = createSelector(
  selectTrickTracker,
  (state) => state?.tricks
);

export const selectSelectedTrickId = createSelector(
  selectTrickTracker,
  (state) => state?.selectedTrickId
);

export const selectSelectedTrick = createSelector(
  selectTricks,
  selectSelectedTrickId,
  (tricks, selectedTrickId) =>
    tricks.find((trick) => trick.id === selectedTrickId)
);
