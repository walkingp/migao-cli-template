import React, { Suspense } from "react";
import { Layout, Spin, Menu, Dropdown } from "antd";
import { WindowsOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import logo from "./../../assets/images/logo.svg";
import { adminRoutes } from "../../routes";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Index(props: any) {
  const StyledMenu = styled(Menu)`
    height: "100%";
    border-right: 0;
  `;
  const contentStyle = {
    padding: "0 24px",
    minHeight: 280,
  };

  const menu = (
    <Menu>
      <Menu.Item>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header flex space-between align-center">
        <div className="logo flex align-center justify-center white">
          <img className="padding-right-xs" src={logo} alt=""></img>
          Migao CMS
        </div>
        <Dropdown overlay={menu}>
          <a
            className="ant-dropdown-link white"
            onClick={(e) => e.preventDefault()}
          >
            <UserOutlined /> 用户中心 <DownOutlined />
          </a>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <StyledMenu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[props.location.pathname]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <WindowsOutlined />
                  内容管理
                </span>
              }
            >
              {adminRoutes
                .filter((route) => route.isMenu)
                .map((route) => {
                  return (
                    <Menu.Item
                      key={route.path}
                      onClick={(item) => {
                        props.history.push(item.key);
                      }}
                    >
                      {route.title}
                    </Menu.Item>
                  );
                })}
            </SubMenu>
          </StyledMenu>
        </Sider>
        <Layout>
          <Content className="site-layout-background" style={contentStyle}>
            <Suspense fallback={<Spin />}>{props.children}</Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(Index);
