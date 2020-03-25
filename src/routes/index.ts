import Login from "./../pages/login";
import Page404 from "./../pages/page404";
import Dashboard from "../pages/admin/dashboard";
import CommonList from "../pages/admin/common/list";
import CommonEdit from "../pages/admin/common/edit";
import {
  AreaChartOutlined,
  UnorderedListOutlined,
  EditOutlined,
} from "@ant-design/icons";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
    isMenu: true,
    title: "看板",
    icon: AreaChartOutlined,
  },
  {
    path: "/admin/common/list",
    component: CommonList,
    isMenu: true,
    title: "列表",
    icon: UnorderedListOutlined,
  },
  {
    path: "/admin/common/edit",
    component: CommonEdit,
    isMenu: true,
    title: "编辑",
    icon: EditOutlined,
  },
];
