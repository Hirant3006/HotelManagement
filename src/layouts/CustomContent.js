import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./BasicLayout.css";
import RouterConfig from "../router/index";
const { Content, Footer } = Layout;

export default class CustomContent extends PureComponent {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: "16px 0  10px 15px" }}>
          <Breadcrumb.Item>{description}</Breadcrumb.Item>
        </Breadcrumb>
        <Component />
      </div>
    );
  }
}
