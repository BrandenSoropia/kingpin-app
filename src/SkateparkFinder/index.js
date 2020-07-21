import { connect } from "react-redux";
import { selectSkateparks, setSkateparks } from "./state";
import SkateparkFinder from "./SkateparkFinder";

const ConnectedSkateparkFinder = connect(
  (state) => ({
    skateparks: selectSkateparks(state),
  }),
  {
    setSkateparks,
  }
)(SkateparkFinder);

export default ConnectedSkateparkFinder;
