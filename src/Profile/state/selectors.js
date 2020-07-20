import { createSelector } from "@reduxjs/toolkit";

export const selectProfile = (state) => state?.profile;

export const selectName = createSelector(
  selectProfile,
  (profile) => profile?.name
);

export const selectProfilePicture = createSelector(
  selectProfile,
  (profile) => profile?.profilePicture
);

export const selectTagline = createSelector(
  selectProfile,
  (profile) => profile?.tagline
);

export const selectSocialMediaHandle = createSelector(
  selectProfile,
  (profile) => profile?.socialMediaHandle
);

export const selectHomeSkatepark = createSelector(
  selectProfile,
  (profile) => profile?.homeSkatepark
);
