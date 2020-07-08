import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const listIngredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients</p>
      <ul>{listIngredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button type="Danger" clicked={props.closeModal}>
        Cancel
      </Button>
      <Button type="Success" clicked={props.order}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
