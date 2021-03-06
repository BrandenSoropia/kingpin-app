import PropTypes from "prop-types";

export const addressPropTypes = PropTypes.shape({
  street: PropTypes.string,
  city: PropTypes.string,
  province: PropTypes.string,
  country: PropTypes.string,
});

export const skateparkPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  hours: PropTypes.string,
  address: addressPropTypes,
});

export const skateparksPropTypes = PropTypes.arrayOf(skateparkPropTypes);
