import React, { useEffect } from "react";
import { View, ScrollView, Title, Body, FlatList } from "ui-kit";
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

  if (!skateparks) {
    return <Body>Loading!</Body>;
  }

  return (
    <View>
      <FlatList
        paddingX="two"
        ListHeaderComponent={
          <Title marginBottom="one">Toronto Skateparks</Title>
        }
        data={skateparks}
        renderItem={({ item: skatepark, idx }) => (
          <SkateparkListItem
            key={`skatepark-list-item${skatepark.id}`}
            {...skatepark}
            onPress={() => {
              setSelectedSkatepark(skatepark.id);
              navigation.navigate("Details", { screen: "Details" });
            }}
            isLastOfType={idx === skateparks.length - 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
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
