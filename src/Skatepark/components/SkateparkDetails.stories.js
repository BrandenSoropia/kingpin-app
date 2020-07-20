import React from "react";
import { storiesOf } from "@storybook/react-native";
import SkateparkDetails from "./SkateparkDetails";
import skateparkData from "common/data/skateparks.json";

const skatepark = skateparkData.skateparks[1];
storiesOf("Skatepark/Skatepark Details", module).add(
  "View Full Details",
  () => (
    <SkateparkDetails
      name={skatepark.name}
      description={skatepark.description}
      address={{
        ...skatepark.address,
        postalCode: skatepark.postal_code,
      }}
      price={skatepark.price}
      hours={skatepark.hours}
    />
  )
);
