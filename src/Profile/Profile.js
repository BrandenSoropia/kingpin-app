import React, { useEffect } from "react";
import { Details } from "./components";
import { Flex, PrimaryTouchableOpacity, Body } from "ui-kit";
import PropTypes from "prop-types";
import { profilePropTypes, profileDefaultProps } from "./prop-types";

const Profile = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  homeSkatepark,
  navigation,
  setName,
}) => {
  useEffect(() => {
    setName("Brock the Cat");
  });

  if (!name) {
    return <Body>Loading...</Body>;
  }

  return (
    <Flex flex={1} paddingX="two" paddingY="two">
      <Details
        name={name}
        profilePicture={profilePicture}
        tagline={tagline}
        socialMediaHandle={socialMediaHandle}
        homeSkatepark={homeSkatepark}
      />
      <PrimaryTouchableOpacity
        marginTop="two"
        onPress={() => {
          navigation.navigate("Profile", { screen: "Edit" });
        }}
      >
        <Body textAlign="center">Edit Profile</Body>
      </PrimaryTouchableOpacity>
    </Flex>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  ...profilePropTypes,
  setName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  ...profileDefaultProps,
};

export default Profile;
