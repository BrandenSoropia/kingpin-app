import React from "react";
import { TrickListItem } from "./components";
import { ScrollView, Title } from "ui-kit";
import PropTypes from "prop-types";

const TrickTracker = ({ tricks }) => {
  const trickIds = Object.keys(tricks);
  return (
    <ScrollView paddingX="two" paddingY="two">
      <Title>Trick List</Title>
      {trickIds.map((trickId, idx) => (
        <TrickListItem
          key={`trick-${trickId}`}
          {...tricks[trickId]}
          // TODO: Fill in on click
          onPress={() => {}}
          isLastOfType={idx === trickIds.length - 1}
        />
      ))}
      {/* For some reason the bottom of the scroll view is overflowing below. FIx it! Might have to add margin bottom to last item... */}
    </ScrollView>
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
