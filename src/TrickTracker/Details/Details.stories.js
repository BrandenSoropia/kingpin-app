import React from "react";
import { storiesOf } from "@storybook/react-native";
import Details from "./Details";
import { mockFormattedTricks } from "../state/__mocks__/mock-state";

const trick = mockFormattedTricks[1];

storiesOf("Trick Tracker/Trick Details", module).add(
  "View Full Details",
  () => (
    <Details
      title={trick.name}
      description={trick.description}
      resources={trick.resources}
      fallbackImage={trick.fallbackImage}
    />
  )
);
