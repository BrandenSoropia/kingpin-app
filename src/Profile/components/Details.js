import React from "react";
import { Box, Flex, Title, Body, Image, Callout } from "ui-kit";
import PropTypes from "prop-types";

/**
 *
 * @param {string} tagline max 60 characters. Based off of https://moz.com/learn/seo/title-tag#:~:text=Optimal%20title%20length,your%20titles%20to%20display%20properly.
 * @param {string} description handles newline breaks.
 */
const Details = ({
  name,
  profilePicture,
  mockImage,
  tagline,
  instagramHandle,
}) => {
  return (
    <Flex display="flex" flexDirection="row">
      <Image
        uri={profilePicture}
        {...(mockImage && { source: mockImage })}
        width={160}
        height={160}
        borderRadius="round"
      />
      <Flex flexShrink={1} paddingLeft="two" margin="auto">
        <Title marginBottom="half">{name}</Title>
        {/* TODO: Make this clickable and opens in Instagram */}
        {instagramHandle && (
          <Callout color="grey" marginBottom="half">
            {instagramHandle}
          </Callout>
        )}
        <Box
          borderColor="grey"
          borderRadius="round"
          borderTopLeftRadius="none"
          borderWidth="thin"
          paddingX="one"
          paddingY="half"
        >
          <Body>{tagline || "Add a tagline!"}</Body>
        </Box>
      </Flex>
    </Flex>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  mockImage: PropTypes.number,
  tagline: PropTypes.string,
  instagramHandle: PropTypes.string,
};

Details.defaultProps = {
  profilePicture: "",
  mockImage: null,
  tagline: "",
  instagramHandle: null,
};

export default Details;
