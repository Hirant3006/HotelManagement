import  React, {PureComponent } from "react";
import { Layout,Icon } from 'antd';

const { Header } = Layout;

export default class CustomHeader extends PureComponent {

  
    render() {
      return (
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
        </Header>
      );
    }
  }
  