import React from "react";
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale-provider/zh_CN";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/scss/mi.scss";
import "./styles/layout.scss";
import Login from "./pages/login";
import Index from "./pages/admin/index";
import Page404 from "./pages/page404";

const App = () => (
  <ConfigProvider locale={zh_CN}>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"} component={Login}></Route>
        <Route
          path={"/admin"}
          render={(props) => <Index {...props}></Index>}
        ></Route>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
