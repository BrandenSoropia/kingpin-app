import { connect } from "react-redux";
import {
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
  selectHomeSkatepark,
} from "./state";
import Profile from "./Profile";

export const ProfileContainer = connect(
  (state) => ({
    name: selectName(state),
    profilePicture: selectProfilePicture(state),
    tagline: selectTagline(state),
    socialMediaHandle: selectSocialMediaHandle(state),
    homeSkatepark: selectHomeSkatepark(state),
  }),
  null
)(Profile);
