import React, { Component } from "react";
import Aux from "./Aux";
import Modal from "../components/UI/Modal/Modal";

const withErrorHandling = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.response.use(null, (error) => {
        this.setState({ error });
      });
      axios.interceptors.request.use(
        (res) => res,
        (req) => {
          this.setState({
            error: null,
          });
        }
      );
    }
    errorConfirmedHandler = () => {
      this.setState({
        error: null,
      });
    };
    render() {
      return (
        <Aux>
          <Modal
            isShowed={this.state.error}
            closeModal={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandling;
