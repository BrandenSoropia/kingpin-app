import React from "react";
import { View } from "react-native";
import { Box, Text, Image } from "ui-kit";
import PropTypes from "prop-types";

const Details = ({ name, profilePicture, mockImage }) => {
  return (
    <Box>
      <Image
        uri={profilePicture}
        {...(mockImage && { source: mockImage })}
        width={50}
        height={50}
      />
      <Text>{name}</Text>
    </Box>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  mockImage: PropTypes.number,
};

export default Details;
