import React from "react";
import { storiesOf } from "@storybook/react-native";
import Edit from "./Edit";

storiesOf("Profile/Edit", module)
  .add("With Full Profile", () => (
    <Edit
      name="Angry Brock"
      socialMediaHandle="@brock_the_hustler"
      tagline="Raised on the Streets. Pro Hustler."
    />
  ))
  .add("With Only Name", () => <Edit name="Angry Brock" />);