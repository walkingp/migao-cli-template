import React, { Suspense } from "react";
import { Layout, Spin, Menu, Breadcrumb } from "antd";
import { Route, Switch } from "react-router-dom";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Dashboard from "./dashboard";
import Page404 from "./../page404";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Index() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header flex space-between align-center">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ height: "64px", lineHeight: "64px" }}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">用户中心</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  系统管理
                </span>
              }
            >
              <Menu.Item key="1">用户管理</Menu.Item>
              <Menu.Item key="2">内容管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <LaptopOutlined />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <NotificationOutlined />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<Spin />}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route component={Page404} />
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
