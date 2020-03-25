import React from "react";
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale-provider/zh_CN";
import { Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/mi.scss";
import "./styles/layout.scss";
import Index from "./pages/admin/index";
import { adminRoutes } from "./routes";

const App = (props: any) => (
  <ConfigProvider locale={zh_CN}>
    <Index>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            ></Route>
          );
        })}
        <Redirect to="/admin/dashboard" from="/admin"></Redirect>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Index>
  </ConfigProvider>
);

export default App;
