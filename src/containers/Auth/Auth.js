import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import classes from "./Auth.css";
import { auth } from "../../store/actions/auth";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";

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
    isSignup: true,
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

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup ? "SIGN_UP" : "SIGN_IN"
    );
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    console.log("RENDER");
    if (this.props.isAuthen) {
      return <Redirect to={this.props.redirectPath} />;
    }

    let form = formElementsArray.map((element) => {
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
    });

    return (
      <div className={classes["Auth"]}>
        {this.props.loading && <Spinner></Spinner>}
        {this.props.error && (
          <p className={classes["error-message"]}>{this.props.error.message}</p>
        )}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button clicked={this.submitHandler} btnType="Success">
            SUBMIT
          </Button>
        </form>
        <Button
          btnType="Danger"
          clicked={() =>
            this.setState((prevState) => ({
              ...prevState,
              isSignup: !prevState.isSignup,
            }))
          }
        >
          SWITCH TO {this.state.isSignup ? "SIGN IN" : "SIGN UP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthen: Boolean(state.auth.token),
    redirectPath: state.auth.redirectPath,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, mode) => {
    dispatch(auth(email, password, mode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
