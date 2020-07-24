import React from "react";
import {
  ScrollView,
  Title,
  Body,
  Image,
  WebLinkWrapper,
  PrimaryTouchableOpacity,
  View,
} from "ui-kit";
import { trickPropTypes, trickDefaultProps } from "../prop-types";
import fallbackImage from "assets/mock-trick.jpg";

const WebLink = WebLinkWrapper(PrimaryTouchableOpacity);

const TrickDetails = ({ details }) => {
  const { name, description, image, links } = details;

  return (
    <ScrollView>
      <Image
        source={(image && { uri: image }) || fallbackImage}
        width="100%"
        height={300}
        marginBottom="one"
      />
      <Title marginBottom="one">{name}</Title>
      <Body marginBottom="two">{description}</Body>
      {/* TODO: If time, rework links to include CTA and href */}
      {links.map((href) => (
        <WebLink href={href} key={`web-link-${href}`} marginBottom="two">
          <Body textAlign="center">Read and watch a tutorial here</Body>
        </WebLink>
      ))}
    </ScrollView>
  );
};

TrickDetails.propTypes = {
  details: trickPropTypes,
};

TrickDetails.defaultProps = {
  ...trickDefaultProps,
};

export default TrickDetails;
