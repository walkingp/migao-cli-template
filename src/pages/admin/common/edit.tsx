import React from "react";
import { PageHeader, Form, Input, Button } from "antd";
import { RouteProps } from "react-router";

export default function CommonEdit(props: RouteProps) {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const validateMessages = {
    required: "请填写必填项",
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <section>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="返回首页"
        subTitle="通用编辑"
      />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "username"]}
          label="用户名"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "password"]}
          label="密码"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
