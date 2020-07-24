import PropTypes from "prop-types";

export const trickPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  fallbackImage: PropTypes.number,
  links: PropTypes.arrayOf(PropTypes.string),
});

export const trickDefaultProps = {
  image: null,
  fallbackImage: null,
};
