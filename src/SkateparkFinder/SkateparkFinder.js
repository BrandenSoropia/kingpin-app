import React from "react";
import { ScrollView, Title, View } from "ui-kit";
import SkateparkListItem from "./components/SkateparkListItem";
import { skateparkPropTypes } from "./prop-types";

const SkateparkList = ({ skateparks }) => {
  return (
    <View paddingX="two" paddingY="one">
      <Title marginBottom="one">Toronto Skateparks</Title>
      <ScrollView>
        {skateparks.map((skatepark) => (
          <SkateparkListItem
            key={`skatepark-list-item${skatepark.id}`}
            {...skatepark}
          />
        ))}
      </ScrollView>
    </View>
  );
};

SkateparkList.propTypes = {
  skatepark: skateparkPropTypes,
};

export default SkateparkList;
