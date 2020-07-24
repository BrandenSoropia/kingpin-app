import React from "react";
import { connect } from "react-redux";
import { selectSkateparks, setSkateparks, setSelectedSkatepark } from "./state";
import SkateparkFinder from "./SkateparkFinder";
import ConnectedSkateparkDetails from "./SkateparkDetails";
import { createStackNavigator } from "@react-navigation/stack";

const SkateparkFinderStack = createStackNavigator();

const ConnectedSkateparkFinder = connect(
  (state) => ({
    skateparks: selectSkateparks(state),
  }),
  {
    setSkateparks,
    setSelectedSkatepark,
  }
)(SkateparkFinder);

const SkateparkFinderConnectedNavigator = () => {
  return (
    <SkateparkFinderStack.Navigator>
      <SkateparkFinderStack.Screen
        name="Search"
        component={ConnectedSkateparkFinder}
      />
      <SkateparkFinderStack.Screen
        name="Skatepark Details"
        component={ConnectedSkateparkDetails}
      />
    </SkateparkFinderStack.Navigator>
  );
};

export default SkateparkFinderConnectedNavigator;
