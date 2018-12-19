export default () => {
  return [
    {
      iconType: "home",
      name: "Home",
      url: "/home"
    },
    {
      iconType: "database",
      name: "Room",
      url: "/room"
    },
    {
      iconType: "database",
      name: "Customer",
      url: "/customer"
    },
    {
      iconType: "database",
      name: 'Device',
      url:'/device',

    },
    {
      iconType: "database",
      name: 'Service',
      url:'/Service',
    },
    {
      iconType: "database",
      name: 'Booking',
      url:'/Booking',
    }
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
