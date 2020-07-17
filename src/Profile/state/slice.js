import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: null,
  profilePicture: null,
  tagline: null,
  socialMediaHandle: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setName: {
      reducer: (state, { payload }) => ({
        ...state,
        name: payload?.name,
      }),
      prepare: (name) => ({
        payload: {
          name,
        },
      }),
    },
    setProfilePicture: {
      reducer: (state, { payload }) => ({
        ...state,
        profilePicture: payload?.profilePicture,
      }),
      prepare: (profilePicture) => ({
        payload: {
          profilePicture,
        },
      }),
    },
    setTagline: {
      reducer: (state, { payload }) => ({
        ...state,
        tagline: payload?.tagline,
      }),
      prepare: (tagline) => ({
        payload: {
          tagline,
        },
      }),
    },
    setSocialMediaHandle: {
      reducer: (state, { payload }) => ({
        ...state,
        socialMediaHandle: payload?.socialMediaHandle,
      }),
      prepare: (socialMediaHandle) => ({
        payload: {
          socialMediaHandle,
        },
      }),
    },
  },
});

const { actions, reducer } = profileSlice;

export const {
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
} = actions;

export default reducer;
