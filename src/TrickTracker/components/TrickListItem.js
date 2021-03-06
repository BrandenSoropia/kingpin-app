import React from "react";
import { Image, Title, TouchableOpacity } from "ui-kit";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import fallbackImage from "assets/mock-trick.jpg";

const StyledTouchableOpacity = styled(TouchableOpacity).attrs(
  ({ isLastOfType }) => ({
    marginBottom: isLastOfType ? "none" : "two",
  })
)``;

/**
 *
 * @param {bool} isLastOfType used only to apply different styling on the last TrickListItem
 */
const TrickListItem = ({ name, image, onPress, isLastOfType }) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      display="flex"
      flexDirection="row"
      alignItems="center"
      isLastOfType={isLastOfType}
    >
      <Image
        source={(image && { uri: image }) || fallbackImage}
        height={100}
        width={100}
      />
      <Title paddingLeft="two">{name}</Title>
    </StyledTouchableOpacity>
  );
};

TrickListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isLastOfType: PropTypes.bool.isRequired,
};

TrickListItem.defaultProps = {
  image: null,
};

export default TrickListItem;
