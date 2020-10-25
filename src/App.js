import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout";

const Checkout = lazy(() => import("./containers/Checkout/Checkout"));
const Auth = lazy(() => import("./containers/Auth/Auth"));
const Orders = lazy(() => import("./containers/Orders/Orders"));

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Suspense fallback="Loading...">
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Suspense>
        </Layout>
      </div>
    );
  }
}

export default App;
