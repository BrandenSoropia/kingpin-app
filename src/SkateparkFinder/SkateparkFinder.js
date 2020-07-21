import React, { useEffect } from "react";
import { ScrollView, Title, View, Body } from "ui-kit";
import SkateparkListItem from "./components/SkateparkListItem";
import { skateparksPropTypes } from "./prop-types";
import PropTypes from "prop-types";
import skateparkData from "common/data/skateparks.json";

const SkateparkFinder = ({
  skateparks,
  setSkateparks,
  setSelectedSkatepark,
  navigation,
}) => {
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
    <ScrollView paddingX="two" paddingY="two">
      <Title marginBottom="one">Toronto Skateparks</Title>
      {Object.keys(skateparks).map((skateparkId) => (
        <SkateparkListItem
          key={`skatepark-list-item${skateparkId}`}
          {...skateparks[skateparkId]}
          onPress={() => {
            setSelectedSkatepark(skateparkId);
            navigation.navigate("Skatepark Details");
          }}
        />
      ))}
    </ScrollView>
  );
};

SkateparkFinder.propTypes = {
  skateparks: skateparksPropTypes,
  setSkateparks: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SkateparkFinder;
