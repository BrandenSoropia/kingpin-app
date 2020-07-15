import React from "react";
import { storiesOf } from "@storybook/react-native";
import Details from "./Details";

storiesOf("Profile/Details", module)
  .add("With Short Details", () => (
    <Details
      name="Angry Brock"
      mockImage={require("assets/mock-profile.jpg")}
      instagramHandle="@brock_the_hustler"
      tagline="Raised on the Streets. Pro Hustler."
    />
  ))
  .add("With Long Details", () => (
    <Details
      name="ReallyAngry BrockTheCat"
      mockImage={require("assets/mock-profile.jpg")}
      instagramHandle="@brock_the_hustler"
      tagline="Pro Hustler. Cute Cat. Picky Eater. Bug Hunter. Energizer Cat."
    />
  ));
