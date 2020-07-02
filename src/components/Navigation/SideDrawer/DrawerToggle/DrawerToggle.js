import React from "react";

import "./DrawerToggle.css";

const drawerToggleHandler = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.toggleDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggleHandler;
