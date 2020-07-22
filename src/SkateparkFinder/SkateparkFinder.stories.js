import React from "react";
import { storiesOf } from "@storybook/react-native";
import SkateparkFinder from "./SkateparkFinder";
import { mockFormattedSkateparksState } from "./state/__mocks__/mock-state";

storiesOf("Skatepark/Skatepark List", module).add("Many Skateparks", () => (
  <SkateparkFinder
    skateparks={mockFormattedSkateparksState}
    setSkateparks={() => {}}
    setSelectedSkatepark={() => {}}
    navigation={{
      navigate: () => {},
    }}
  />
));
