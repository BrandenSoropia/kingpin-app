import PropTypes from "prop-types";

export const trickPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
});

export const trickDefaultProps = {
  image: null,
};
