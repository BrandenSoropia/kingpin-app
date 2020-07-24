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
import { profilePropTypes, profileDefaultProps } from "../prop-types";

const Edit = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  homeSkatepark,
  setName,
  setProfilePicture,
  setTagline,
  setSocialMediaHandle,
  setHomeSkatepark,
  navigation,
}) => {
  // Future TODO: Confirm back if unsaved changes
  const [updatedName, setUpdatedName] = useState(name || "");
  const [updatedTagline, setUpdatedTagline] = useState(tagline || "");
  const [updatedSocialMediaHandle, setUpdatedSocialMediaHandle] = useState(
    socialMediaHandle || ""
  );
  const [updatedProfilePicture, setUpdatedProfilePicture] = useState(
    profilePicture || ""
  );
  const [updateHomeSkatepark, setUpdatedHomeSkatepark] = useState(
    homeSkatepark || ""
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
          marginTop="one"
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
          label="Home Skatepark"
          value={updateHomeSkatepark}
          onChangeText={setUpdatedHomeSkatepark}
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
          // TODO: Clean this up... Formik or similar libraries would handle this so much better
          // Got really tired and lazy so leaving this as is...
          if (name !== updatedName) {
            setName(updatedName);
          }

          if (tagline !== updatedTagline) {
            setTagline(updatedTagline);
          }

          if (socialMediaHandle !== updatedSocialMediaHandle) {
            setSocialMediaHandle(updatedSocialMediaHandle);
          }

          if (profilePicture !== updatedProfilePicture) {
            setProfilePicture(updatedProfilePicture);
          }

          if (homeSkatepark !== updateHomeSkatepark) {
            setHomeSkatepark(updateHomeSkatepark);
          }

          navigation.navigate("Profile", { screen: "Details" });
        }}
      >
        <Body textAlign="center">Done</Body>
      </PrimaryTouchableOpacity>
    </ScrollView>
  );
};

Edit.propTypes = {
  ...profilePropTypes,
  setName: PropTypes.func.isRequired,
  setProfilePicture: PropTypes.func.isRequired,
  setTagline: PropTypes.func.isRequired,
  setSocialMediaHandle: PropTypes.func.isRequired,
  setHomeSkatepark: PropTypes.func.isRequired,
};

Edit.defaultProps = {
  ...profileDefaultProps,
};

export default Edit;
