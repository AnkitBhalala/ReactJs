import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {
  render() {
    return <button onClick={this.props.startLogin}>Login</button>;
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
