import React from "react";
import PropTypes from "prop-types";
import { Callout } from "ui-kit";

const Address = ({ street, city }) => {
  let formattedAddress = "";

  if (street && city) {
    formattedAddress = `${street}, ${city}`;
  } else {
    formattedAddress = street;
  }

  return (
    <Callout marginBottom="one" color="grey" marginBottom="one">
      {`📍 ${formattedAddress}`}
    </Callout>
  );
};

Address.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
};

Address.defaultProps = {
  street: "",
  city: "",
};

export default Address;
