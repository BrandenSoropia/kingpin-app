import { connect } from "react-redux";
import Edit from "./Edit";
import {
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
  selectHomeSkatepark,
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
  setHomeSkatepark,
} from "../state";

const EditContainer = connect(
  (state) => ({
    name: selectName(state),
    profilePicture: selectProfilePicture(state),
    tagline: selectTagline(state),
    socialMediaHandle: selectSocialMediaHandle(state),
    homeSkatepark: selectHomeSkatepark(state),
  }),
  {
    setName,
    setProfilePicture,
    setTagline,
    setSocialMediaHandle,
    setHomeSkatepark,
  }
)(Edit);

export default EditContainer;
