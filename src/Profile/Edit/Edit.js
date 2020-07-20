import React, { useState, useEffect } from "react";
import { View, Body, PrimaryTouchableOpacity, ScrollView } from "ui-kit";
import PropTypes from "prop-types";
import { TextInputSection } from "./components";
import { ProfileIcon } from "common/components";
import { useImagePickerPermissions, asyncPickImage } from "common/helpers";

const Edit = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
  navigation,
}) => {
  // Future TODO: Confirm back if unsaved changes
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedTagline, setUpdatedTagline] = useState(tagline);
  const [updatedSocialMediaHandle, setUpdatedSocialMediaHandle] = useState(
    socialMediaHandle
  );
  // TODO: Figure out how to update profile picture
  // Use https://docs.expo.io/versions/latest/sdk/imagepicker/. It's installed already
  const [updatedProfilePicture, setUpdatedProfilePicture] = useState(
    profilePicture
  );

  useImagePickerPermissions();

  return (
    <ScrollView paddingX="two" paddingY="two">
      <View>
        <ProfileIcon profilePicture={updatedProfilePicture} />
        <PrimaryTouchableOpacity
          borderWidth="none"
          onPress={() => {
            asyncPickImage()
              .then((result) => {
                console.log("#result ", result);
                setUpdatedProfilePicture(result.uri);
              })
              .catch((error) => {
                alert(error);
              });
          }}
        >
          <Body textAlign="center">Change Profile Picture</Body>
        </PrimaryTouchableOpacity>
      </View>
      <View>
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
      </View>
      <PrimaryTouchableOpacity
        marginTop="two"
        onPress={() => {
          setName(updatedName);
          setTagline(updatedTagline);
          setSocialMediaHandle(updatedSocialMediaHandle);
          setProfilePicture(updatedProfilePicture);

          navigation.navigate("Profile");
        }}
      >
        <Body textAlign="center">Done</Body>
      </PrimaryTouchableOpacity>
    </ScrollView>
  );
};

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
  setName: PropTypes.func.isRequired,
  setProfilePicture: PropTypes.func.isRequired,
  setTagline: PropTypes.func.isRequired,
  setSocialMediaHandle: PropTypes.func.isRequired,
};

Edit.defaultProps = {
  profilePicture: null,
  tagline: "",
  socialMediaHandle: "",
};

export default Edit;
