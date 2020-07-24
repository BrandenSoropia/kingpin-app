import React from "react";
import {
  ScrollView,
  Title,
  Body,
  Image,
  WebLinkWrapper,
  PrimaryTouchableOpacity,
} from "ui-kit";
import { trickPropTypes, trickDefaultProps } from "../prop-types";

const WebLink = WebLinkWrapper(PrimaryTouchableOpacity);

const TrickDetails = ({ details }) => {
  const { name, description, image, fallbackImage, links } = details;

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
        <WebLink href={href} key={`web-link-${href}`}>
          <Body textAlign="center">Read or watch a tutorial here</Body>
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
