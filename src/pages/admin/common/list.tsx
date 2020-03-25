import React, { useEffect } from "react";
import { PageHeader, Table } from "antd";
import { get } from "../../../utils/http";

export default function CommonList() {
  const fetch = () => {
    get("/users").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <section>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="返回首页"
        subTitle="通用列表"
      />
      <Table dataSource={dataSource} columns={columns} />;
    </section>
  );
}
