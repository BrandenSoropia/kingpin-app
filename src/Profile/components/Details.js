import React from "react";
import { View, Flex, Title, Body, Callout } from "ui-kit";
import { ProfileIcon } from "common/components";
import { profilePropTypes, profileDefaultProps } from "../prop-types";

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
  console.log(name, profilePicture, tagline, socialMediaHandle, homeSkatepark);

  return (
    <View>
      <Flex flexDirection="row" marginBottom="two">
        <ProfileIcon profilePicture={profilePicture} />
        <Flex flexShrink={1} marginLeft="three" alignSelf="center">
          <Title marginBottom="one">{name}</Title>
          {/* TODO: Make this clickable and opens in Instagram */}
          {!!socialMediaHandle && (
            <Callout color="grey" marginBottom="half">
              👤 {socialMediaHandle}
            </Callout>
          )}
          {/* TODO: Make this clickable, redirect to skate park details somehow. Maybe refer by skatepark ID??? */}
          {!!homeSkatepark && (
            <Body marginBottom="half">🏠 {homeSkatepark}</Body>
          )}
        </Flex>
      </Flex>
      {!!tagline && (
        <View paddingX="one" paddingY="half">
          <Body>{tagline}</Body>
        </View>
      )}
    </View>
  );
};

Details.propTypes = {
  ...profilePropTypes,
};

Details.defaultProps = {
  ...profileDefaultProps,
};

export default Details;
