import React from "react";
import { storiesOf } from "@storybook/react-native";
import Edit from "./Edit";

storiesOf("Profile/Edit", module).add("View Full Edit Page", () => (
  <Edit
    profile={{
      name: "Angry Brock",
      mockImage: require("assets/mock-profile.jpg"),
      instagramHandle: "@brock_the_hustler",
      tagline: "Raised on the Streets. Pro Hustler.",
    }}
  />
));
