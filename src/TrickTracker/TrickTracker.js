import React from "react";
import { TrickListItem } from "./components";
import { View, ScrollView, Title } from "ui-kit";
import PropTypes from "prop-types";

const TrickTracker = ({ tricks }) => {
  const trickIds = Object.keys(tricks);
  return (
    <View>
      <ScrollView>
        <Title paddingBottom="two" marginLeft="two">
          Trick List
        </Title>
        {trickIds.map((trickId, idx) => (
          <TrickListItem
            key={`trick-${trickId}`}
            {...tricks[trickId]}
            // TODO: Go to trick details page
            onPress={() => {}}
            isLastOfType={idx === trickIds.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
};

TrickTracker.propTypes = {
  tricks: PropTypes.shape({
    trickId: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default TrickTracker;
