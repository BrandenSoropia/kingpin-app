import PropTypes from "prop-types";

/**
 * For shared prop-types.
 */
export const profilePropTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
  tagline: PropTypes.string,
  socialMediaHandle: PropTypes.string,
  homeSkatepark: PropTypes.string,
};

export const profileDefaultProps = {
  name: "",
  profilePicture: "",
  tagline: "",
  socialMediaHandle: "",
  homeSkatepark: "",
};
