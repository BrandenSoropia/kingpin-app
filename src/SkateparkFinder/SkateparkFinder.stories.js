import React from "react";
import { storiesOf } from "@storybook/react-native";
import SkateparkList from "./SkateparkFinder";
import skateparkData from "common/data/skateparks.json";

storiesOf("Skatepark/Skatepark List", module).add("Many Skateparks", () => (
  <SkateparkList skateparks={skateparkData.skateparks} />
));
