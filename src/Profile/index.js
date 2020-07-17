import { connect } from "react-redux";
import {
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
} from "./state";
import Profile from "./Profile";

export * from "./state";

export const ProfileContainer = connect(
  (state) => ({
    name: selectName(state),
    profilePicture: selectProfilePicture(state),
    tagline: selectTagline(state),
    socialMediaHandle: selectSocialMediaHandle(state),
  }),
  null
)(Profile);
