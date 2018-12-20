import React, { PureComponent } from "react";
import { Layout } from "antd";

const { Header } = Layout;

export default class CustomHeader extends PureComponent {
  render() {
    return <Header style={{ background: "#fff", padding: 0 }} />;
  }
}
