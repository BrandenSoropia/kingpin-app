import React from "react";
import { Details } from "./components";
import { Flex, PrimaryTouchableOpacity, Body } from "ui-kit";
import PropTypes from "prop-types";

const Profile = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  navigation,
}) => {
  return (
    <Flex flex={1} paddingX="two" paddingY="two">
      <Details
        name={name}
        profilePicture={profilePicture}
        tagline={tagline}
        socialMediaHandle={socialMediaHandle}
      />
      <PrimaryTouchableOpacity
        marginTop="two"
        onPress={() => {
          navigation.navigate("Edit Profile");
        }}
      >
        <Body textAlign="center">Edit Profile</Body>
      </PrimaryTouchableOpacity>
    </Flex>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Profile;
