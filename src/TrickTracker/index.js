import React from "react";
import TrickTracker from "./TrickTracker";
import { setTricks, setSelectedTrickId, selectTricks } from "./state";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import ConnectedTrickDetails from "./TrickDetails";

const TrickTrackerStack = createStackNavigator();

const ConnectedTrickTracker = connect(
  (state) => ({
    tricks: selectTricks(state),
  }),
  { setTricks, setSelectedTrickId }
)(TrickTracker);

const TrickerTrackerConnectedNavigator = () => {
  return (
    <TrickTrackerStack.Navigator>
      <TrickTrackerStack.Screen
        name="Trick Tracker"
        component={ConnectedTrickTracker}
      />
      <TrickTrackerStack.Screen
        name="Details"
        component={ConnectedTrickDetails}
      />
    </TrickTrackerStack.Navigator>
  );
};

export default TrickerTrackerConnectedNavigator;
