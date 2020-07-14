import React from "react";
import { storiesOf } from "@storybook/react-native";
import Details from "./Details";

storiesOf("Profile/Details", module).add("With Details", () => (
  <Details name="Aaron Kyro" mockImage={require("assets/mock-profile.jpg")} />
));
