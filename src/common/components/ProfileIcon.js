import React from "react";
import { Image } from "ui-kit";
import PropTypes from "prop-types";
const ProfilePictureImageFallback = require("assets/mock-profile.jpg");

const ProfileIcon = ({ profilePicture }) => (
  <Image
    source={
      (profilePicture && { uri: profilePicture }) || ProfilePictureImageFallback
    }
    width={100}
    height={100}
    borderRadius="circle"
    alignSelf="center"
  />
);

ProfileIcon.propTypes = {
  profilePicture: PropTypes.string,
};

ProfileIcon.defaultIcon = {
  profilePicture: null,
};

export default ProfileIcon;
