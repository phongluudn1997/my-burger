import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSumary";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelHandler={this.checkoutCancelled}
          continueHandler={this.checkoutContinued}
        />
      </div>
    );
  }
}

export default Checkout;
