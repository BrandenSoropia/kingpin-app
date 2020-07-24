import React from "react";
import { TrickListItem } from "./components";
import { View, Title, FlatList } from "ui-kit";
import PropTypes from "prop-types";

const TrickTracker = ({ tricks }) => {
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
            // TODO: Go to trick details page
            onPress={() => {}}
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
};

export default TrickTracker;
