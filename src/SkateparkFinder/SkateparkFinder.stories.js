import React from "react";
import { storiesOf } from "@storybook/react-native";
import SkateparkFinder from "./SkateparkFinder";
import skateparkData from "common/data/skateparks.json";

storiesOf("Skatepark/Skatepark List", module).add("Many Skateparks", () => (
  <SkateparkFinder
    skateparks={skateparkData.skateparks}
    setSkateparks={() => {}}
    navigation={{
      navigate: () => {},
    }}
  />
));
