import React,{PureComponent} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";
import {Layout,Breadcrumb} from 'antd';
import 'antd/dist/antd.css';
import './BasicLayout.css'

const {Content,Footer} = Layout;

export default class BasicLayout extends PureComponent  {
  state = {
    collapsed: false,
    windowHeight: window.innerHeight
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    console.log( windowHeight);
    const {collapsed,windowHeight} = this.state;
    return (
      <Layout >
        <CustomSider collapsed={collapsed} />
        <Layout style={{height:"100vh"}}>
        <CustomHeader collapsed={collapsed} toggle={this.toggle} />
        <Breadcrumb style={{ margin: '16px 0  10px 15px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', height: '100%' }}>
           <div style={{ padding: 24, background: '#fff', height:"auto"}}>
           </div>
        </Content>
        <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

