import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    formIsValid: false,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          name: "name",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        touched: false,
        validation: {},
        valid: true,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        touched: false,
        validation: {},
        valid: true,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        touched: false,
        validation: {},
        valid: true,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
        },
        value: "",
        touched: false,
        valid: true,
        validation: {},
      },
      deliveryMethod: {
        elementType: "select",
        value: "cheapest",
        touched: false,
        validation: {},
        valid: true,
        elementConfig: {
          options: [
            { value: "fastest", valueDisplay: "Fastest" },
            { value: "cheapest", valueDisplay: "Cheapest" },
          ],
        },
      },
    },
    loading: false,
  };

  isFormFieldValid = (value, rules) => {
    let result = true;
    if (rules.required) {
      result = value.trim() !== "" && result;
    }

    if (rules.minLength) {
      result = value.length >= rules.minLength && result;
    }

    if (rules.maxLength) {
      result = value.length <= rules.maxLength && result;
    }
    return result;
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};

    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  onChangeHandler = (e, key) => {
    console.log(e.target.value);
    let orderForm = {
      ...this.state.orderForm,
      [key]: {
        ...this.state.orderForm[key],
        value: e.target.value,
        valid: this.isFormFieldValid(
          e.target.value,
          this.state.orderForm[key].validation
        ),
        touched: true,
      },
    };

    let formIsValid = true;
    for (let inputIdentifier in orderForm) {
      formIsValid = orderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        formIsValid,
        orderForm,
      };
    });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((element) => {
          return (
            <Input
              key={element.id}
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
              onChange={(event) => this.onChangeHandler(event, element.id)}
              shouldValidate={element.config.validation}
              invalid={!element.config.valid}
              touched={element.config.touched}
            />
          );
        })}
        <Button
          disabled={!this.state.formIsValid}
          btnType="Success"
          clicked={this.orderHandler}
        >
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
