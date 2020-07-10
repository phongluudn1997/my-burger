import React from "react";

import "./CheckoutSummary.css";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <span>We hope it it tastes good!</span>
      <Burger ingredients={props.ingredients} />
      <Button clicked={props.cancelHandler} type="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continueHandler} type="Success">
        ORDER
      </Button>
    </div>
  );
};

export default checkoutSummary;
