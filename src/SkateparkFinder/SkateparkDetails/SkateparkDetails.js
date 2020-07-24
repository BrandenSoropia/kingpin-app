import React from "react";
import { Image, Body, Callout, View, Title, ScrollView, Flex } from "ui-kit";
const fallbackSkateparkImage = require("assets/mock-skatepark.jpg");
import { skateparkPropTypes } from "../prop-types";
import Address from "../components/Address";

const SkateparkDetails = ({ details }) => {
  const { name, image, address, price, hours, description } = details;

  return (
    <ScrollView>
      <Image
        source={(image && { uri: image }) || fallbackSkateparkImage}
        width="100%"
        height={300}
        marginBottom="two"
      />
      <View paddingX="two">
        <Title fontWeight="bold" marginBottom="one">
          {name}
        </Title>
        <Address {...address} />
        <Callout marginBottom="one">{`💲${price || "Free"}`}</Callout>
        <Callout marginBottom="two">{`⏰${hours || "Unknown"}`}</Callout>
        <Body paddingBottom="two">{description}</Body>
      </View>
    </ScrollView>
  );
};

SkateparkDetails.propTypes = {
  details: skateparkPropTypes.isRequired,
};

SkateparkDetails.defaultProp = {
  image: "",
  description: "",
  price: 0,
  hours: "",
};

export default SkateparkDetails;
