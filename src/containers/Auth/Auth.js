import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.css";

class Auth extends React.Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          name: "Email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          name: "Password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
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

  onChangeHandler = (e, key) => {
    let controls = {
      ...this.state.controls,
      [key]: {
        ...this.state.controls[key],
        value: e.target.value,
        valid: this.isFormFieldValid(
          e.target.value,
          this.state.controls[key].validation
        ),
        touched: true,
      },
    };

    let formIsValid = true;
    for (let inputIdentifier in controls) {
      formIsValid = controls[inputIdentifier].valid && formIsValid;
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        formIsValid,
        controls,
      };
    });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    console.log(this.state.controls);

    console.log(formElementsArray);

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
      </form>
    );

    return (
      <div className={classes["Auth"]}>
        {form}
        <Button btnType="Success">SUBMIT</Button>
      </div>
    );
  }
}

export default Auth;
