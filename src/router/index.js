import React, { PureComponent } from "react";
import { routes, itemSidebar } from "../configs";
import { Route } from "react-router-dom";
import {Breadcrumb} from 'antd';

export default class RouterConfig extends PureComponent {
  
  // renderComponent = (item) =>{
  //   return (
  //     <div>
  //       {<Breadcrumb style={{ margin: "16px 0  10px 15px" }}>
  //         <Breadcrumb.Item{item.description}</Breadcrumb.Item>
  //       </Breadcrumb>}
  //       <item.component >/>
  //     </div>
  //   );
  // };
  
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
    return <div>{this.renderRoute()}</div>;
  }
}
