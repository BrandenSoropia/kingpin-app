import React from "react";
import { Image, Title, TouchableOpacity } from "ui-kit";
import PropTypes from "prop-types";

const TrickListItem = ({ name, image, fallbackImage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={(image && { uri: image }) || fallbackImage} />
      <Title>{name}</Title>
    </TouchableOpacity>
  );
};

TrickListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  fallbackImage: PropTypes.number,
  onPress: PropTypes.func.isRequired,
};

TrickListItem.defaultProps = {
  image: "",
  fallbackImage: null,
};

export default TrickListItem;
