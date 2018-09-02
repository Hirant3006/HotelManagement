import Home from "../pages/Home";
import Room from "../pages/Room";

export default () => {
  return [
    {
      path: "/",
      component: Home,
      description: 'Trang chủ',
      exact: true
    },
    {
      path: "/home",
      description: 'Trang chủ',
      component: Home,
    },
    {
      path: "/room",
      description: 'Quản lí phòng',
      component: Room
    }
  ];
};
