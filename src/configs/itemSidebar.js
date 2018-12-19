export default () => {
  return [
    {
      iconType: "home",
      name: "Trang chủ",
      url: "/home"
    },
    {
      iconType: "database",
      name: 'Đặt phòng',
      url:'/Booking',
    },
    {
      iconType: "database",
      name: "Phòng",
      url: "/room"
    },
    {
      iconType: "database",
      name: "Khách Hàng",
      url: "/customer"
    },
    {
      iconType: "database",
      name: 'Thiết bị',
      url:'/device',

    },
    {
      iconType: "database",
      name: 'Dịch vụ',
      url:'/Service',
    },
 
    // { path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
    // { path: '**',
    //   component: PageNotFoundComponent
    // }
  ];
};
