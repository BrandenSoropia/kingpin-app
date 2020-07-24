import React from "react";
import { storiesOf } from "@storybook/react-native";
import TrickDetails from "./TrickDetails";
import { mockFormattedTricks } from "../state/__mocks__/mock-state";

const trick = mockFormattedTricks[1];

storiesOf("Trick Tracker/Trick Details", module).add(
  "View Full Trick Details",
  () => (
    <TrickDetails
      title={trick.name}
      description={trick.description}
      resources={trick.resources}
      fallbackImage={trick.fallbackImage}
      links={trick.links}
    />
  )
);
