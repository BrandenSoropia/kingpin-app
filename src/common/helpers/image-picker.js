import { useEffect } from "react";
import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  launchCameraAsync,
  requestCameraPermissionsAsync,
  requestCameraRollPermissionsAsync,
  PermissionStatus,
} from "expo-image-picker";
import Constants from "expo-constants";

const getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const {
      status: cameraRollStatus,
    } = await requestCameraRollPermissionsAsync();
    if (cameraRollStatus !== PermissionStatus.GRANTED) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    const { status: cameraStatus } = await requestCameraPermissionsAsync();
    if (cameraStatus !== PermissionStatus.GRANTED) {
      alert("Sorry, we need camera permissions to make this work!");
    }
  }
};

export const useImagePickerPermissions = () => {
  useEffect(() => {
    getPermissionAsync();
  }, [getPermissionAsync]);
};

export const profilePictureConfiguration = {
  mediaTypes: MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
};

export const onPickImageFromLibrary = (options) =>
  launchImageLibraryAsync(options);

export const onTakePhoto = (options) => launchCameraAsync(options);
