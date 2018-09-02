import React, { PureComponent } from "react";
import { routes } from "../configs";
import { Route } from "react-router-dom";

export default class RouterConfig extends PureComponent {
  renderRoute = () => {
    const route = routes();
    console.log(typeof routes);
    return route.map((item, index) => {
      return (
        <Route
          path={item.path}
          component={item.component}
          exact={item.exact ? true : false}
        />
      );
    });
  };

  // _renderRoute = (multiLang) => {
  // 	const route = routes(multiLang)
  // 	return route.map((item, index) => {
  // 		return (
  // 			<AuthorizedRoute
  // 				key={index}
  // 				path={item.path}
  // 				authority={item.authority === false ? false : true}
  // 				component={(props) => this._renderLayout(item, props)}
  // 				exact={item.exact ? true : false}
  // 			/>
  // 		)
  // 	})
  // }

  render() {
    return (
      <div>
          {this.renderRoute()}
          {/* <Route path='/room' component={Room} />
          <Route path='/home' component={Home} exact/> */}
      </div>
    );
  }
}
