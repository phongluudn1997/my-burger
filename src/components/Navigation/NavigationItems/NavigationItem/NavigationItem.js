import React from "react";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <a className={props.active && "active"} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
