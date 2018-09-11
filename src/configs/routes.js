import Home from "../pages/Home";
import Room from "../pages/Room";
import Customer from "../pages/Customer";
export default () => {
  return [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/room",
      component: Room
    },
    {
      path: "/customer",
      component: Customer
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
