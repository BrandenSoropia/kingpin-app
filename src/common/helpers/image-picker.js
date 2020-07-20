import { useEffect } from "react";
import {
  MediaTypeOptions,
  launchImageLibraryAsync,
  requestCameraRollPermissionsAsync,
  PermissionStatus,
} from "expo-image-picker";
import Constants from "expo-constants";

const getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status, ...rest } = await requestCameraRollPermissionsAsync();
    if (status !== PermissionStatus.GRANTED) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};

export const useImagePickerPermissions = () => {
  useEffect(() => {
    getPermissionAsync();
  }, [getPermissionAsync]);
};

export const asyncPickImage = () => {
  return launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
};
