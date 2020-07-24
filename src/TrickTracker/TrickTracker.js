import React from "react";
import { TrickListItem } from "./components";
import { View, Title, FlatList } from "ui-kit";
import PropTypes from "prop-types";

const TrickTracker = ({ tricks, setTricks, setSelectedTrickId }) => {
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
            key={`trick-${trick.id}`}
            {...trick}
            onPress={() => {
              setSelectedTrickId(trick.id);
            }}
            isLastOfType={idx === tricks.length - 1}
          />
        )}
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
};

export default TrickTracker;
