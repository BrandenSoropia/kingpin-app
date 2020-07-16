import React from "react";
import { Flex, Body, TextInput } from "ui-kit";
import PropTypes from "prop-types";

const TextInputSection = ({ label, value, onChangeText }) => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      borderColor="grey"
      borderStyle="solid"
      borderTopWidth="thin"
    >
      <Body>{label}</Body>
      <TextInput onChangeText={(text) => onChangeText(text)} value={value} />
    </Flex>
  );
};

TextInputSection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInputSection;
