import PropTypes from "prop-types";

export const trickPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  fallbackImage: PropTypes.number,
  resources: PropTypes.arrayOf(PropTypes.string),
});

export const trickDefaultProps = {
  image: null,
  fallbackImage: null,
};
