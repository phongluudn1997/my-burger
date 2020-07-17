import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionCreators from "../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.tryFetchOrders();
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }
    console.log(this.props);
    return (
      <div>
        {this.props.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryFetchOrders: () => {
      dispatch(actionCreators.tryFetchOrders());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
