import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/BurgerSummary/BurgerSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandling from "../../hoc/witherErrorHandling";

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
      loading: false,
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

  order = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Phong Luu",
        address: {
          street: "Street Name",
          zipCode: "550000",
          country: "Vietnam",
        },
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders", order)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          purchasing: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        closeModal={this.purchaseCancelHandler}
        order={this.order}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          closeModal={this.purchaseCancelHandler}
          isShowed={this.state.purchasing}
        >
          {orderSummary}
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

export default withErrorHandling(BurgerBuilder, axios);
