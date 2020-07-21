import React from "react";
import { Image, Title, View, Body, TouchableOpacity } from "ui-kit";
import PropTypes from "prop-types";
const fallbackSkateparkImage = require("assets/mock-skatepark.jpg");
import { addressPropTypes } from "../prop-types";
import Address from "./Address";

const SkateparkListItem = ({ name, image, address, description }) => {
  return (
    <TouchableOpacity
      borderRadius="round"
      marginX="half"
      borderColor="grey"
      borderWidth="thin"
      onPress={() => {}}
    >
      <Image
        source={(image && { uri: image }) || fallbackSkateparkImage}
        width="100%"
        height={250}
        borderTopLeftRadius="round"
        borderTopRightRadius="round"
      />
      <View paddingX="two" paddingY="one">
        <Title
          fontWeight="bold"
          ellipsizeMode="tail"
          paddingBottom="half"
          numberOfLines={2}
        >
          {name}
        </Title>
        <Address {...address} />
        <Body numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

SkateparkListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  ...addressPropTypes,
};

SkateparkListItem.defaultProps = {
  image: "",
  description: "",
};

export default SkateparkListItem;
