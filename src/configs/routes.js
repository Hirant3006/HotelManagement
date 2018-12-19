import Home from "../pages/Home";
import Room from "../pages/Room";
import Customer from "../pages/Customer";
import Device from '../pages/Device'
import Booking from "../pages/Booking";

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
      path: "/booking",
      description: "Đặt phòng",
      component: Booking,
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
    },
    {
      path: "/service",
      // component: 
    },
    {
      path: "/booking"
    }
  ];
};
