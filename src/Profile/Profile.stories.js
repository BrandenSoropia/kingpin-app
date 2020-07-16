import React from "react";
import { storiesOf } from "@storybook/react-native";
import Profile from "./Profile";

storiesOf("Profile", module).add("View Profile", () => (
  <Profile
    profile={{
      name: "Angry Brock",
      socialMediaHandle: "@brock_the_hustler",
      tagline: "Raised on the Streets. Pro Hustler.",
    }}
  />
));
