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

const ResourceLink = WebLinkWrapper(PrimaryTouchableOpacity);

const TrickDetails = ({ details }) => {
  const { title, description, image, fallbackImage, links } = details;

  return (
    <ScrollView>
      <Image
        source={(image && { uri: image }) || fallbackImage}
        width="100%"
        height={300}
        marginBottom="one"
      />
      <Title marginBottom="one">{title}</Title>
      <Body marginBottom="two">{description}</Body>
      {/* TODO: If time, rework links to include CTA and href */}
      {links.map((href) => (
        <ResourceLink href={href}>
          <Body textAlign="center">Read or watch a tutorial here</Body>
        </ResourceLink>
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
