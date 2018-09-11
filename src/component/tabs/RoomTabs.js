import { Tabs, Icon } from 'antd';


import React, { Component } from 'react';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;


export default class RoomTabs extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="2">
    <TabPane tab={<span><Icon type="apple" />Single</span>} key="1">
    {this.props.SRoom}
    </TabPane>
    <TabPane tab={<span><Icon type="android" />Couple</span>} key="2">
    {this.props.CRoom}
    </TabPane>
  </Tabs>
            </div>
        );
    }
}

