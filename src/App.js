import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BugerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
