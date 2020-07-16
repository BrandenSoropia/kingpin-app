import React, { useState } from "react";
import {
  Box,
  Flex,
  Body,
  Image,
  TextInput,
  PrimaryTouchableOpacity,
  DismissKeyboardBox,
} from "ui-kit";
import PropTypes from "prop-types";
import { Keyboard } from "react-native";
import { TextInputSection } from "./components";

const Edit = ({
  name,
  profilePicture,
  mockImage,
  tagline,
  socialMediaHandle,
}) => {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedTagline, setUpdatedTagline] = useState(tagline);
  const [updatedSocialMediaHandle, setUpdatedSocialMediaHandle] = useState(
    socialMediaHandle
  );

  return (
    <DismissKeyboardBox>
      <Box>
        <Image
          {...(profilePicture && { uri: profilePicture })}
          {...(mockImage && { source: mockImage })}
          width={160}
          height={160}
          borderRadius="round"
          alignSelf="center"
          marginBottom="one"
        />
        <PrimaryTouchableOpacity
          borderWidth="none"
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Body textAlign="center">Change Profile Picture</Body>
        </PrimaryTouchableOpacity>
      </Box>
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
    </DismissKeyboardBox>
  );
};

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  mockImage: PropTypes.number,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
};

export default Edit;
