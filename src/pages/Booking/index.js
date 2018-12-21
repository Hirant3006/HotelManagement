import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";

import { Tabs } from "antd";
//import Phong from './Phong'
import {
  getDatPhongRequest,
  getDatPhongOnlineRequest,
  comfirmBookingRequest
} from "../../actions/datphong";

import {
  getPhongRequest
} from "../../actions/phong";

import Quay from "./Quay"
import TrucTuyen from "./TrucTuyen";

const TabPane = Tabs.TabPane;

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDatPhongRequest, getDatPhongOnlineRequest } = this.props;
    getDatPhongRequest();
    getDatPhongOnlineRequest();
  }

  render() {
    console.log(this.props);
    // const {khachhang} = this.props;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Quầy" key="1">
          <Quay {...this.props} />
        </TabPane>
        <TabPane tab="Trực tuyến" key="2">
          <TrucTuyen {...this.props} />
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    datphong: state.datphong.datphong,
    datphongonline: state.datphong.datphongonline,
    phongbyid: state.phong.phongbyid,
    confirmbooking: state.datphong.confirmbooking
  };
};

const mapDispatchToProps = {
  getDatPhongRequest,
  getDatPhongOnlineRequest,
  getPhongRequest,
  comfirmBookingRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
