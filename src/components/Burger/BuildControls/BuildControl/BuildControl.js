import React from "react";

import "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div>{props.label}</div>
      <button disabled={props.disabled} onClick={props.removeIngredientHandler}>
        Less
      </button>
      <button onClick={props.addIngredientHandler}>More</button>
    </div>
  );
};

export default buildControl;
