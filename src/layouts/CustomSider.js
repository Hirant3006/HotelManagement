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
        </Menu>
      </Sider>
    );
  }
}
