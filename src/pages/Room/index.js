import React from "react";
import { connect } from "react-redux";
import  { Tabs } from "antd";
import { reset } from 'redux-form';
import LoaiPhong from './Component/LoaiPhong';
import Phong from './Component/Phong';
import {
  getListLoaiPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
} from "../../actions/loaiphong";

import{
  getListPhongRequest,
} from "../../actions/phong";

const TabPane = Tabs.TabPane;

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
<<<<<<< HEAD
    // console.log(this.props);
    this.props.getListLoaiPhongRequest();
=======
>>>>>>> 04a9204937dc0fa3ca0e481af69a0ec9edfa29c5
    this.props.getListPhongRequest();
  }

  render() {
<<<<<<< HEAD
   console.log(this.props);
   const {phong,loaiphong} = this.props;
   console.log(loaiphong);
=======
>>>>>>> 04a9204937dc0fa3ca0e481af69a0ec9edfa29c5
    return ( 
      <div>
        <Tabs defaultActiveKey="2" >
          <TabPane tab="Phòng" key="1">
            <Phong {...this.props}/>
          </TabPane>
          <TabPane tab="Loại phòng" key="2">
           <LoaiPhong {...this.props} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong : state.phong.phong,
    loaiphong: state.loaiphong.loaiphong,
   // khachhang: state.khachhang.khachhang,
    // loaiphong: state.phong.loaiphongtheoid,
    addloaiphong : state.loaiphong.addloaiphong,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong
  };
};

const mapDispatchToProps = {
  
  getListPhongRequest,
  getListLoaiPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
