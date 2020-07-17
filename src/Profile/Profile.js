import React from "react";
import { Details } from "./components";
import { Flex, PrimaryTouchableOpacity, Body } from "ui-kit";
import PropTypes from "prop-types";

const Profile = ({ profile, navigation }) => {
  return (
    <Flex flex={1} paddingX="two" paddingY="two">
      <Details {...profile} />
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
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    tagline: PropTypes.string,
    socialMediaHandle: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Profile;
