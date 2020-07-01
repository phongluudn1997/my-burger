import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    isSideDrawerShowed: false,
  };
  hideDrawerHandler = () => {
    this.setState({ isSideDrawerShowed: false });
  };

  toggleDrawerHandler = () => {
    this.setState((state) => {
      return { isSideDrawerShowed: !state.isSideDrawerShowed };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          toggle={this.toggleDrawerHandler}
          showSideDrawerHandler={this.showSideDrawerHandler}
        />
        <SideDrawer
          isShowed={this.state.isSideDrawerShowed}
          hideSideDrawer={this.hideDrawerHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
