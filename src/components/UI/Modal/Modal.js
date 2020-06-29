import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Aux>
    <Backdrop isShowed={props.isShowed} closeModal={props.closeModal} />
    <div
      style={{
        transform: props.isShowed ? "translateY(0)" : "translateY(1)",
        opacity: props.isShowed ? "1" : "0",
      }}
      className="Modal"
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
