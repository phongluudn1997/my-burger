import React from "react";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Total Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((control, index) => {
        return (
          <BuildControl
            label={control.label}
            key={index}
            addIngredientHandler={() =>
              props.addIngredientHandler(control.type)
            }
            removeIngredientHandler={() =>
              props.removeIngredientHandler(control.type)
            }
            type={control.type}
            disabled={props.disabledIngredient[control.type]}
          />
        );
      })}
      <button
        onClick={props.ordered}
        disabled={!props.isPerchaseable}
        className="OrderButton"
      >
        ORDER NOW!!
      </button>
    </div>
  );
};

export default buildControls;
