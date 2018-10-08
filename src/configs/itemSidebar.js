export default () => {
  return [
    {
      iconType: "home",
      name: 'Home',
      url:'/home',
    },
    {
      iconType: "database",
      name: 'Room',
      url:'/room',

    },
    {
      iconType: "database",
      name: 'Customer',
      url:'/customer',

    },
    {
      iconType: "database",
      name: 'Repair',
      url:'/repair',

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
