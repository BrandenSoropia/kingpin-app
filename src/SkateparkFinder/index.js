import { connect } from "react-redux";
import { selectSkateparks, setSkateparks, setSelectedSkatepark } from "./state";
import SkateparkFinder from "./SkateparkFinder";

const ConnectedSkateparkFinder = connect(
  (state) => ({
    skateparks: selectSkateparks(state),
  }),
  {
    setSkateparks,
    setSelectedSkatepark,
  }
)(SkateparkFinder);

export default ConnectedSkateparkFinder;
