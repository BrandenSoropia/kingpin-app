import React from "react";
import { Flex, Body, Image } from "ui-kit";
import PropTypes from "prop-types";

const Edit = ({ profile }) => {
  return (
    <Flex>
      <Body>Hi</Body>
    </Flex>
  );
};

Edit.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    mockImage: PropTypes.number,
    tagline: PropTypes.string,
    instagramHandle: PropTypes.string,
  }).isRequired,
};

export default Edit;
