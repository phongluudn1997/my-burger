import React from "react";
import { authLogout } from "../../../store/actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount() {
    this.props.onLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
