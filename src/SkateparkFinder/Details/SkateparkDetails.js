import React from "react";
import { Image, Body, Callout, View, Title, ScrollView } from "ui-kit";
import PropTypes from "prop-types";
const fallbackSkateparkImage = require("assets/mock-skatepark.jpg");
import { addressPropTypes } from "../prop-types";
import Address from "../components/Address";

const SkateparkDetails = ({
  name,
  image,
  address,
  price,
  hours,
  description,
}) => {
  return (
    <ScrollView>
      <Image
        source={(image && { uri: image }) || fallbackSkateparkImage}
        width="100%"
        height="50%"
        marginBottom="two"
      />
      <View paddingX="two">
        <Title fontWeight="bold" marginBottom="one">
          {name}
        </Title>
        <Address {...address} />
        <Callout marginBottom="one">{`💲${price || "Free"}`}</Callout>
        <Callout marginBottom="two">{`⏰${hours || "Unknown"}`}</Callout>
        <Body>{description}</Body>
      </View>
    </ScrollView>
  );
};

SkateparkDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  hours: PropTypes.string,
  address: addressPropTypes,
};

SkateparkDetails.defaultProp = {
  image: "",
  description: "",
  price: 0,
  hours: "",
};

export default SkateparkDetails;
