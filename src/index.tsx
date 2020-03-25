import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { mainRoutes } from "./routes";
import "./assets/scss/mi.scss";
import "./styles/layout.scss";
import "./styles/antd.reset.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/admin"
        render={(routeProps) => <App {...routeProps}></App>}
      ></Route>
      {mainRoutes.map((route) => {
        return <Route key={route.path} path={route.path} />;
      })}
      <Redirect to="/404"></Redirect>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
