import React from "react";
import { storiesOf } from "@storybook/react-native";
import TrickTracker from "./TrickTracker";
import { mockFormattedTricks } from "./state/__mocks__/mock-state";

storiesOf("Trick Tracker", module).add("Main Screen", () => (
  <TrickTracker
    tricks={mockFormattedTricks}
    setTricks={() => {}}
    setSelectedTrickId={() => {}}
  />
));
