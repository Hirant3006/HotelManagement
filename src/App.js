import React, { PureComponent } from "react";
//import { connect, Provider } from 'react-redux';
import BasicLayout from "./layouts/BasicLayout";
import CustomerCard from './component/customer_card/CustomerCard'

export default class App extends PureComponent {
  render() {
    return (
     // <Provider store={store}>
    <div>
    <BasicLayout />;
 
    </div>
    //</Provider>
    )
  }
}
