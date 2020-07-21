import { connect } from "react-redux";
import { selectSelectedSkatepark } from "../state";
import SkateparkDetails from "./SkateparkDetails";

const ConnectedSkateparkDetails = connect(
  (state) => ({
    details: selectSelectedSkatepark(state),
  }),
  null
)(SkateparkDetails);

export default ConnectedSkateparkDetails;
