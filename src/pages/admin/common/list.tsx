import React, { useEffect, useState } from "react";
import { PageHeader, Table, Button } from "antd";
import { get } from "../../../utils/http";
import { withRouter } from "react-router-dom";

function CommonList(props: any) {
  const [dataSource, setDataSource] = useState([]);

  const fetch = () => {
    get("/users").then((res: any) => {
      setDataSource(res.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    {
      title: "编号",
      key: "id",
      width: 80,
      render: (txt: string, row: any, index: number) => index + 1,
    },
    {
      title: "姓名",
      dataIndex: "username",
      key: "name",
    },
    {
      title: "操作",
      width: 100,
      key: "action",
      render: (txt: string, row: any) => (
        <>
          <Button
            onClick={(e) => props.history.push("/admin/common/edit/23")}
            type="link"
          >
            编辑
          </Button>
        </>
      ),
    },
  ];
  return (
    <section>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="返回首页"
        subTitle="通用列表"
        extra={[
          <Button
            key="add"
            onClick={(e) => props.history.push("/admin/common/add")}
            type="primary"
          >
            添加
          </Button>,
        ]}
      />
      <Table rowKey="_id" dataSource={dataSource} columns={columns} />;
    </section>
  );
}

export default withRouter(CommonList);
