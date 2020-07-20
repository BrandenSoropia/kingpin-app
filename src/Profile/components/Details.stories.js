import React from "react";
import { storiesOf } from "@storybook/react-native";
import Details from "./Details";

storiesOf("Profile/Details", module)
  .add("With Short Details", () => (
    <Details
      name="Angry Brock"
      socialMediaHandle="@brock_the_hustler"
      tagline="Raised on the Streets. Pro Hustler."
      homeSkatepark="Dunbat Skatepark"
    />
  ))
  .add("With Long Details", () => (
    <Details
      name="ReallyAngry BrockTheCat"
      socialMediaHandle="@brock_the_hustler"
      tagline="Pro Hustler. Cute Cat. Picky Eater. Bug Hunter. Energizer Cat."
      homeSkatepark="Dunbat Skatepark"
    />
  ));
