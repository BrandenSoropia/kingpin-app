import React, { useEffect } from "react";
import { ScrollView, Title, Body } from "ui-kit";
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

  const skateparkIds = Object.keys(skateparks);
  return (
    <ScrollView paddingX="two" paddingY="two">
      <Title marginBottom="one">Toronto Skateparks</Title>
      {skateparkIds.map((skateparkId, idx) => (
        <SkateparkListItem
          key={`skatepark-list-item${skateparkId}`}
          {...skateparks[skateparkId]}
          onPress={() => {
            setSelectedSkatepark(skateparkId);
            navigation.navigate("Details", { screen: "Details" });
          }}
          isLastOfType={idx === skateparkIds.length - 1}
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
