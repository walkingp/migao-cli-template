import Login from "./../pages/login";
import Index from "./../pages/admin/index";
import Page404 from "./../pages/page404";
import Dashboard from "../pages/admin/dashboard";

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
    path: "/admin",
    component: Index,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
];
