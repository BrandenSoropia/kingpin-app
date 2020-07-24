import React from "react";
import { storiesOf } from "@storybook/react-native";
import TrickListItem from "./TrickListItem";
import trickData from "common/data/tricks.json";

const trick = trickData.tricks[0];

storiesOf("Tricks/Trick List/Trick List Item", module).add("One Trick", () => (
  <TrickListItem name={trick.name} onPress={() => {}} isLastOfType />
));
