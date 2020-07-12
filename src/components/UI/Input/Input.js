import React from "react";

import classes from "./Input.css";
const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.onChange}
          className={inputClasses.join(" ")}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          onChange={props.onChange}
          className={inputClasses.join(" ")}
          value={props.value}
          {...props.elementConfig}
        >
          {props.value}
        </textarea>
      );
      break;

    case "select":
      inputElement = (
        <select
          onChange={props.onChange}
          value={props.value}
          className={inputClasses.join(" ")}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.valueDisplay}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
