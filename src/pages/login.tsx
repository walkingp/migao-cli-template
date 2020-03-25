import React, { useState } from "react";
import { Card, Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { post } from "../utils/http";
import { setToken } from "../utils/auth";
import { withRouter } from "react-router";

function Login(props: any) {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setLoading(true);
    await post("login", values)
      .then((res: any) => {
        if (res.status === 200) {
          setLoading(false);
          setToken(res.data.token);
          message.success("登录成功");
          props.history.push("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section
      style={{ backgroundColor: "#ececec" }}
      className="full-height flex align-center"
    >
      <Card title="登录系统" style={{ width: 400, margin: "0 auto" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
}

export default withRouter(Login);
