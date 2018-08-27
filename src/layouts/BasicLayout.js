import  React, {PureComponent } from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './BasicLayout.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content,Footer } = Layout;
export default class BasicLayout extends PureComponent {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
      <Sider
      />
      <Layout >
        <Header style={{ padding: 0 }}>
        </Header>
        <Content >
          <div style={{ padding: 24, background: '#fff', minHeight: 'auto' }}>
        
            {/* <Components
              isMobile={isMobile}
              isIpad={isIpad}
              {...this.props}
            /> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright <Icon type='copyright' /> 2018
         
          , All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
    );
  }
}
