import { connect } from "react-redux";
import Edit from "./Edit";
import {
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
} from "../state";

export const EditContainer = connect(
  (state) => ({
    name: selectName(state),
    profilePicture: selectProfilePicture(state),
    tagline: selectTagline(state),
    socialMediaHandle: selectSocialMediaHandle(state),
  }),
  {
    setName,
    setProfilePicture,
    setTagline,
    setSocialMediaHandle,
  }
)(Edit);
