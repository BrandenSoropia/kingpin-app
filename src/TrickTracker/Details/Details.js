import React from "react";
import { ScrollView, Title, Body, Image } from "ui-kit";
import { trickPropTypes, trickDefaultProps } from "../prop-types";

// TODO: Display list of resources that open links to web
const Details = ({ title, description, image, fallbackImage, resources }) => {
  return (
    <ScrollView>
      <Image source={(image && { uri: image }) || fallbackImage} />
      <Title>{title}</Title>
      <Body>{description}</Body>
    </ScrollView>
  );
};

Details.propTypes = {
  trick: trickPropTypes,
};

Details.defaultProps = {
  ...trickDefaultProps,
};

export default Details;
