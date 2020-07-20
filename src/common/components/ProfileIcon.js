import React from "react";
import { Image } from "ui-kit";
import PropTypes from "prop-types";
const ProfilePictureImageFallback = require("assets/mock-profile.jpg");

const ProfileIcon = ({ profilePicture }) => (
  <Image
    source={
      (profilePicture && { uri: profilePicture }) || ProfilePictureImageFallback
    }
    width={160}
    height={160}
    borderRadius="round"
    alignSelf="center"
    marginBottom="one"
  />
);

ProfileIcon.propTypes = {
  profilePicture: PropTypes.string,
};

ProfileIcon.defaultIcon = {
  profilePicture: null,
};

export default ProfileIcon;
