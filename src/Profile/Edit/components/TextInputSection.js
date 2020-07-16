import React from "react";
import { Flex, Body, TextInput } from "ui-kit";
import PropTypes from "prop-types";

const TextInputSection = ({ label, value, onChangeText }) => {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Body flexGrow={0} flexShrink={0} flexBasis="33%">
        {label}
      </Body>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        multiline
        textAlignVertical="top"
        flexBasis="67%"
      />
    </Flex>
  );
};

TextInputSection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInputSection;
