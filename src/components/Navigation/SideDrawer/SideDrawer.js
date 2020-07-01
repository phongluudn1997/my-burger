import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = (props) => {
  let SideDrawerClass = ["SideDrawer", "Close"];

  if (props.isShowed) {
    SideDrawerClass = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop isShowed={props.isShowed} closeModal={props.hideSideDrawer} />
      <div className={SideDrawerClass.join(" ")}>
        <div className="SideDrawerLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
