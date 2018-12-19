import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";

import { Tabs } from "antd";
//import Phong from './Phong'
import { getDatPhongRequest } from "../../actions/datphong";
import Quay from './Quay';

const TabPane = Tabs.TabPane;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDatPhongRequest } = this.props;
    getDatPhongRequest();
  }

  render() {
    console.log(this.props);
    // const {khachhang} = this.props;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Quầy" key="1">
          <Quay {...this.props}/> 
        </TabPane>
        <TabPane tab="Trực tuyến" key="2">
          {/* <LoaiThietBi {...this.props} /> */}
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    datphong: state.datphong.datphong
  };
};

const mapDispatchToProps = {
  getDatPhongRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
