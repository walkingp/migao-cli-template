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
import logo from "./../../assets/images/logo.svg";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Index(props: any) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header flex space-between align-center">
        <div className="logo flex align-center justify-center white">
          <img className="padding-right-xs" src={logo} alt=""></img>
          Migao CMS
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ height: "64px", lineHeight: "64px" }}
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
              <Menu.Item key="1">看板</Menu.Item>
              <Menu.Item key="2">列表</Menu.Item>
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
            <Suspense fallback={<Spin />}>{props.children}</Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
