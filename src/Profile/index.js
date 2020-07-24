import React from "react";
import { connect } from "react-redux";
import {
  setName,
  selectName,
  selectProfilePicture,
  selectTagline,
  selectSocialMediaHandle,
  selectHomeSkatepark,
} from "./state";
import Profile from "./Profile";
import ConnectedEdit from "./Edit";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ConnectedProfile = connect(
  (state) => ({
    name: selectName(state),
    profilePicture: selectProfilePicture(state),
    tagline: selectTagline(state),
    socialMediaHandle: selectSocialMediaHandle(state),
    homeSkatepark: selectHomeSkatepark(state),
  }),
  {
    setName,
  }
)(Profile);

const ProfileConnectedNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Details" component={ConnectedProfile} />
      <ProfileStack.Screen name="Edit" component={ConnectedEdit} />
    </ProfileStack.Navigator>
  );
};

export default ProfileConnectedNavigator;
