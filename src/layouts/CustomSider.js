import React, { PureComponent } from "react";
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from "antd";
import { itemSidebar } from "../configs";
const { Sider } = Layout;

export default class CustomSider extends PureComponent {
  renderItem = () => {
    const itemSidebars = itemSidebar();
    return itemSidebars.map((item, index) => {
      return (
        <Menu.Item
          key={index}
        >
        {/* <Link to={'/'}>
        </Link> */}
          <Link
            to={item.url}
          
          >
            <Icon type={item.iconType} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {this.renderItem()}
          {/* <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item> */}
        </Menu>
      </Sider>
    );
  }
}
