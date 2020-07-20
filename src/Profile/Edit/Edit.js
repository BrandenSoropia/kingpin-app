import React, { useState } from "react";
import { View, Body, PrimaryTouchableOpacity, ScrollView } from "ui-kit";
import PropTypes from "prop-types";
import { TextInputSection } from "./components";
import { ProfileIcon } from "common/components";
import {
  useImagePickerPermissions,
  onPickImageFromLibrary,
  onTakePhoto,
  profilePictureConfiguration,
} from "common/helpers";
import { useActionSheet } from "@expo/react-native-action-sheet";

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
  const [updatedProfilePicture, setUpdatedProfilePicture] = useState(
    profilePicture
  );

  // If time, figure how to ask for permissions only when the user picks take a photo or use from library
  useImagePickerPermissions();

  const { showActionSheetWithOptions } = useActionSheet();

  const _onOpenActionSheet = () => {
    showActionSheetWithOptions(
      {
        title: "Change Profile Picture",
        options: ["Take Photo", "Choose From Library", "Cancel"],
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          onTakePhoto(profilePictureConfiguration)
            .then((result) => {
              setUpdatedProfilePicture(result.uri);
            })
            .catch((error) => {
              alert(error);
            });
        } else if (buttonIndex === 1) {
          onPickImageFromLibrary(profilePictureConfiguration)
            .then((result) => {
              setUpdatedProfilePicture(result.uri);
            })
            .catch((error) => {
              alert(error);
            });
        }
      }
    );
  };

  return (
    <ScrollView paddingX="two" paddingY="two">
      <View>
        <ProfileIcon profilePicture={updatedProfilePicture} />
        <PrimaryTouchableOpacity
          borderWidth="none"
          onPress={() => {
            _onOpenActionSheet();
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
