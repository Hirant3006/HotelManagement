import React, { PureComponent } from "react";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./BasicLayout.css";
import RouterConfig from "../router/index";
const { Content, Footer } = Layout;

export default class BasicLayout extends PureComponent {
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
      <Router>
        <Layout>
          <CustomSider collapsed={collapsed} />
          <Layout style={{ height: "100vh" }}>
            <CustomHeader collapsed={collapsed} toggle={this.toggle} />
            {/* <Breadcrumb style={{ margin: "16px 0  10px 15px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content style={{ height: "100%", padding: "24px" }}>
              <div style={{ padding: 24, background: "#fff", height: "auto" }}>
                  {/* <Route path="/room" component={Room} />
                  <Route path="/home" component={Home} exact /> */}
                  <Switch>
                  <RouterConfig />
                  </Switch>
              </div>
            </Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
