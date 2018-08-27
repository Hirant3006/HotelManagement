import React,{PureComponent} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CustomHeader from "./layouts/CustomHeader";
// import CustomSider from "./layouts/CustomSider";
// import {Layout} from 'antd';
import BasicLayout from './layouts/BasicLayout'


export default class App extends PureComponent {

  render() {
    return (
      // <Router>
      <BasicLayout/>
      // </Router>
    );
  }
}
