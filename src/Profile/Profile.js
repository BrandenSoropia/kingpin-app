import React from "react";
import { Details } from "./components";
import { Flex, PrimaryTouchableOpacity, Body } from "ui-kit";
import PropTypes from "prop-types";

const Profile = ({ profile }) => {
  return (
    <Flex flex={1} marginX="three">
      <Details {...profile} />
      <PrimaryTouchableOpacity marginTop="two">
        <Body textAlign="center">Edit Profile</Body>
      </PrimaryTouchableOpacity>
    </Flex>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    mockImage: PropTypes.number,
    tagline: PropTypes.string,
    instagramHandle: PropTypes.string,
  }).isRequired,
};

export default Profile;
