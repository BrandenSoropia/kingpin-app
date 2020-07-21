import React, { useEffect } from "react";
import { ScrollView, Title, View, Body } from "ui-kit";
import SkateparkListItem from "./components/SkateparkListItem";
import { skateparkPropTypes } from "./prop-types";
import PropTypes from "prop-types";
import skateparkData from "common/data/skateparks.json";

const SkateparkFinder = ({ skateparks, setSkateparks }) => {
  useEffect(() => {
    // TODO: Mock API call so I can practice making a loading state if time
    setSkateparks(skateparkData.skateparks);
  }, [setSkateparks]);

  const isSkateparksReady =
    !skateparks ||
    (Object.keys(skateparks).length === 0 && skateparks.constructor === Object);

  if (isSkateparksReady) {
    return <Body>Loading!</Body>;
  }

  return (
    <ScrollView paddingX="two" paddingY="one">
      <Title marginBottom="one">Toronto Skateparks</Title>
      {Object.keys(skateparks).map((skateparkId) => (
        <SkateparkListItem
          key={`skatepark-list-item${skateparkId}`}
          {...skateparks[skateparkId]}
        />
      ))}
    </ScrollView>
  );
};

SkateparkFinder.propTypes = {
  skatepark: skateparkPropTypes,
  setSkateparks: PropTypes.func.isRequired,
};

export default SkateparkFinder;
