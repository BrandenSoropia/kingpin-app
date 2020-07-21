import PropTypes from "prop-types";

export const addressPropTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
