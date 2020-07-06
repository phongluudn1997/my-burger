import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isShowed === this.props.isShowed;
  }
  render() {
    return (
      <Aux>
        <Backdrop
          isShowed={this.props.isShowed}
          closeModal={this.props.closeModal}
        />
        <div
          style={{
            transform: this.props.isShowed ? "translateY(0)" : "translateY(1)",
            opacity: this.props.isShowed ? "1" : "0",
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
