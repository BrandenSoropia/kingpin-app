import React from "react";
import * as WebBrowser from "expo-web-browser";
import PropTypes from "prop-types";

/**
 * An attempt to make a customizable component that opens a link in an in-app modal browser.
 */
const WebLinkWrapper = (Component) => {
  const openInWebModal = (href) => {
    WebBrowser.openBrowserAsync(href);
  };

  return ({ href, children, ...rest }) => (
    <Component
      onPress={() => {
        openInWebModal(href);
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

WebLinkWrapper.propTypes = {
  Component: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

WebLinkWrapper.defaultProps = {
  children: null,
};

export default WebLinkWrapper;
