import Home from "../pages/Home";
import Room from "../pages/Room";
import Customer from "../pages/Customer";
import Device from '../pages/Device'
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
    },
    {
      path: "/customer",
      component: Customer
    },
    {
      path: "/device",
      component: Device
    }
  ];
};
