import React from "react";
import { View, Flex, Title, Body, Callout } from "ui-kit";
import PropTypes from "prop-types";
import { ProfileIcon } from "common/components";

/**
 *
 * @param {string} tagline max 60 characters. Based off of https://moz.com/learn/seo/title-tag#:~:text=Optimal%20title%20length,your%20titles%20to%20display%20properly.
 * @param {string} description handles newline breaks.
 */
const Details = ({
  name,
  profilePicture,
  tagline,
  socialMediaHandle,
  homeSkatepark,
}) => {
  return (
    <View>
      <Flex flexDirection="row" marginBottom="two">
        <ProfileIcon profilePicture={profilePicture} />
        <Flex flexShrink={1} marginLeft="three" alignSelf="center">
          <Title marginBottom="one">{name}</Title>
          {/* TODO: Make this clickable and opens in Instagram */}
          {socialMediaHandle && (
            <Callout color="grey" marginBottom="half">
              👤 {socialMediaHandle}
            </Callout>
          )}
          {homeSkatepark && <Body marginBottom="half">🏠 {homeSkatepark}</Body>}
        </Flex>
      </Flex>
      <View paddingX="one" paddingY="half">
        <Body>{tagline || "Add a tagline!"}</Body>
      </View>
    </View>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
  homeSkatepark: PropTypes.string,
};

Details.defaultProps = {
  profilePicture: null,
  tagline: null,
  socialMediaHandle: null,
  homeSkatepark: null,
};

export default Details;
