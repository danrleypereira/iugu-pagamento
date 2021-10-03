import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.jsx";
import Main from "./DesignSystem.jsx";


const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/hello" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));