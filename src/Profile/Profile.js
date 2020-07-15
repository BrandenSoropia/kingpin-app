import React from "react";
import { Details } from "./components";
import { Flex } from "ui-kit";
import PropTypes from "prop-types";

const Profile = ({ profile }) => {
  return (
    <Flex flex={1}>
      <Details {...profile} />
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
