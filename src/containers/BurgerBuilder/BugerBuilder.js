import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/BurgerSummary/BurgerSummary";

const INGREDIENT_PRICES = {
  cheese: 0.5,
  meat: 1.5,
  salad: 0.5,
  bacon: 1,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.updatePerchaseState = this.updatePerchaseState.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
    this.state = {
      ingredients: {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0,
      },
      totalPrice: 4,
      isPurchaseable: false,
      purchasing: false,
    };
  }

  addIngredientHandler(type) {
    const ingredients = { ...this.state.ingredients };
    const oldCount = ingredients[type];
    const newCount = oldCount + 1;
    ingredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients,
      totalPrice: newPrice,
    });

    this.updatePerchaseState(ingredients);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] === 0) {
      return;
    }

    const ingredients = { ...this.state.ingredients };
    const oldCount = ingredients[type];
    const newCount = oldCount - 1;
    ingredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients,
      totalPrice: newPrice,
    });

    this.updatePerchaseState(ingredients);
  };

  getDisabledIngredientInfo = () => {
    const disabledIngredient = {
      ...this.state.ingredients,
    };

    Object.keys(disabledIngredient).map((key) => {
      return (disabledIngredient[key] = disabledIngredient[key] === 0);
    });
    return disabledIngredient;
  };

  updatePerchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      }
    );
    this.setState({
      isPurchaseable: sum > 0,
    });
  }

  purchaseHandler() {
    this.setState({
      purchasing: true,
    });
  }

  purchaseCancelHandler() {
    this.setState({
      purchasing: false,
    });
  }

  render() {
    return (
      <Aux>
        <Modal
          closeModal={this.purchaseCancelHandler}
          isShowed={this.state.purchasing}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            closeModal={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          disabledIngredient={this.getDisabledIngredientInfo()}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          isPerchaseable={this.state.isPurchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
