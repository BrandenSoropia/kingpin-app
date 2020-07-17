import React, { useState } from "react";
import { Box, Body, PrimaryTouchableOpacity, DismissKeyboardBox } from "ui-kit";
import PropTypes from "prop-types";
import { Keyboard } from "react-native";
import { TextInputSection } from "./components";
import { ProfileIcon } from "common/components";

const Edit = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  setName,
  // TODO: Finish storing all edits to Redux.
}) => {
  // TODO: Finish "Done" button to save all changes
  // Future TODO: Confirm back if unsaved changes
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedTagline, setUpdatedTagline] = useState(tagline);
  const [updatedSocialMediaHandle, setUpdatedSocialMediaHandle] = useState(
    socialMediaHandle
  );
  // TODO: Figure out how to update profile picture

  return (
    <DismissKeyboardBox height="100%" paddingX="two" paddingY="two">
      <Box>
        <ProfileIcon profilePicture={profilePicture} />
        <PrimaryTouchableOpacity
          borderWidth="none"
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Body textAlign="center">Change Profile Picture</Body>
        </PrimaryTouchableOpacity>
      </Box>
      <Box>
        <TextInputSection
          label="Name"
          value={updatedName}
          onChangeText={setUpdatedName}
        />
        <TextInputSection
          label="Social Media"
          value={updatedSocialMediaHandle}
          onChangeText={setUpdatedSocialMediaHandle}
        />
        <TextInputSection
          label="Tagline"
          value={updatedTagline}
          onChangeText={setUpdatedTagline}
        />
      </Box>
      <PrimaryTouchableOpacity
        onPress={() => {
          console.log("### Hi");
          setName(updatedName);
        }}
      >
        <Body>Done</Body>
      </PrimaryTouchableOpacity>
    </DismissKeyboardBox>
  );
};

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
};

Edit.defaultProps = {
  profilePicture: null,
  tagline: "",
  socialMediaHandle: "",
};

export default Edit;
