import React, { PureComponent } from "react";
import { routes } from "../configs";
import { Route } from "react-router-dom";

export default class RouterConfig extends PureComponent {
  renderRoute = () => {
    const route = routes();
    return route.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          component={item.component}
          exact={item.exact ? true : false}
        />
      );
    });
  };

  render() {
    return <div>{this.renderRoute()}</div>;
  }
}
