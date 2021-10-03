import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.jsx";
import Main from "./DesignSystem.jsx";
import CreditCard from "./Components/CreditCard/index.jsx";
// import Checkout from "./Components/Steps/index.jsx";
import Checkout from "./Pages/Checkout/index.jsx";

import "./styles/main.css";


const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/hello" component={App} />
      <Route path="/card" component={CreditCard} />
      <Route path="/steps" component={Checkout} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));