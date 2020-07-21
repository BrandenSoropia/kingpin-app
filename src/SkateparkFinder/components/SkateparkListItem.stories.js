import React from "react";
import { storiesOf } from "@storybook/react-native";
import SkateparkListItem from "./SkateparkListItem";
import skateparkData from "common/data/skateparks.json";

const skatepark = skateparkData.skateparks[1];
storiesOf("Skatepark/Skatepark List/List Item", module).add(
  "Example Skatepark",
  () => (
    <SkateparkListItem
      name={skatepark.name}
      address={skatepark.address}
      description={skatepark.description}
      onPress={() => {}}
    />
  )
);
