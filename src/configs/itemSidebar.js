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
