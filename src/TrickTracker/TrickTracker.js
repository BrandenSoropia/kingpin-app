import React, { useEffect } from "react";
import { TrickListItem } from "./components";
import { View, Title, FlatList, Body } from "ui-kit";
import PropTypes from "prop-types";
import trickData from "common/data/tricks.json";

const TrickTracker = ({
  tricks,
  setTricks,
  setSelectedTrickId,
  navigation,
}) => {
  useEffect(() => {
    setTricks(trickData.tricks);
  }, [setTricks]);

  if (!tricks) {
    return <Body>Loading...</Body>;
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <Title paddingBottom="two" marginLeft="two">
            Trick List
          </Title>
        }
        data={tricks}
        renderItem={({ item: trick, idx }) => (
          <TrickListItem
            {...trick}
            onPress={() => {
              setSelectedTrickId(trick.id);
              navigation.navigate("Trick Tracker", { screen: "Trick Details" });
            }}
            isLastOfType={idx === tricks.length - 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

TrickTracker.propTypes = {
  tricks: PropTypes.arrayOf(
    PropTypes.shape({
      trickId: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  setTricks: PropTypes.func.isRequired,
  setSelectedTrickId: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default TrickTracker;
