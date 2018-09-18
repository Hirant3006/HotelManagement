import React from "react";
import { connect } from "react-redux";
import  { Tabs } from "antd";
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
    // console.log(this.props);
    this.props.getListLoaiPhongRequest();
    this.props.getListPhongRequest();
    // this.props.addLoaiPhongRequest('Phòng tập thể',80000);
    // this.props.findLoaiPhongTheoIdRequest('5b94986892bf312fe4c4b729');
    // this.props.deleteLoaiPhongTheoIdRequest('5b97a19416e89100200353e9');
    // this.props.updateLoaiPhongTheoIdRequest('5b95b529f2b348128caef66e','Phòng VIPP',20000000)
  }

  render() {
   console.log(this.props);
   const {phong,loaiphong} = this.props;
   console.log(loaiphong);
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
  updateLoaiPhongTheoIdRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
