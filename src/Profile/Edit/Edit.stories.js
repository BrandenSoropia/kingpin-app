import React from "react";
import { storiesOf } from "@storybook/react-native";
import Edit from "./Edit";

const mockDispatches = {
  setName: () => {},
  setProfilePicture: () => {},
  setTagline: () => {},
  setSocialMediaHandle: () => {},
  setHomeSkatepark: () => {},
};

storiesOf("Profile/Edit", module)
  .add("With Full Profile", () => (
    <Edit
      name="Angry Brock"
      socialMediaHandle="@brock_the_hustler"
      tagline="Raised on the Streets. Pro Hustler."
      homeSkatepark="Dunbat Skatepark"
      {...mockDispatches}
      navigation={{ navigate: () => {} }}
    />
  ))
  .add("With Only Name", () => (
    <Edit
      name="Angry Brock"
      {...mockDispatches}
      navigation={{ navigate: () => {} }}
    />
  ));
