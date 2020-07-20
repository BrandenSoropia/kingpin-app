import React from "react";
import { Image, Body, Callout, View, Title, ScrollView } from "ui-kit";
import PropTypes from "prop-types";
const fallbackSkateparkImage = require("assets/mock-skatepark.jpg");

const Address = ({ street, city }) => {
  let address = "";

  if (street && city) {
    address = `${street}, ${city}`;
  } else {
    address = street;
  }

  return (
    <Callout marginBottom="one" color="grey" marginBottom="one">
      {`📍 ${address}`}
    </Callout>
  );
};

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
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  price: PropTypes.number,
  hours: PropTypes.string,
};

SkateparkDetails.defaultProp = {
  image: "",
  description: "",
  price: 0,
  hours: "",
};

export default SkateparkDetails;
