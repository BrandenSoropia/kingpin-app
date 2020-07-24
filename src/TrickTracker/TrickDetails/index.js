import { connect } from "react-redux";
import { selectSelectedTrick } from "../state";
import TrickDetails from "./TrickDetails";

const ConnectedTrickDetails = connect(
  (state) => ({
    details: selectSelectedTrick(state),
  }),
  null
)(TrickDetails);

export default ConnectedTrickDetails;
