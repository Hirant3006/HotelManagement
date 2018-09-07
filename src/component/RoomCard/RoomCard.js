import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CustomHeader from "../../layouts/CustomHeader";
import CustomSider from "../../layouts/CustomSider";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "../../layouts/BasicLayout";
import RouterConfig from "../../router/index";
import { Card } from 'antd';
const { Content, Footer } = Layout;

export default class CustomerCard extends PureComponent {
  state = {
    collapsed: false,
    windowHeight: window.innerHeight
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
     
            <div style={{ background: "#ECECEC", padding: "30px" }}>
              <Card title="Customer Card" bordered={false} style={{ width: 300 }}>
                <p>{this.props.Number}</p>
                <p>{this.props.Type}</p>
                <p>{this.props.Status}</p>
              </Card>
            </div>
           
    );
  }
}
