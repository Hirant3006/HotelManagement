import React from "react";
import { connect } from "react-redux";
import  { Tabs } from "antd";
import { reset } from 'redux-form';
import LoaiPhong from './Component/LoaiPhong';
import {
  getListPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
} from "../../actions/phong";

const TabPane = Tabs.TabPane;

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    this.props.getListPhongRequest();
  }

  render() {
    return ( 
      <div>
        <Tabs defaultActiveKey="2" >
          <TabPane tab="Phòng" key="1">
            Content of Tab Pane 1
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
    loaiphong: state.phong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    addloaiphong : state.phong.addloaiphong,
    deleteloaiphong: state.phong.deleteloaiphong,
    updateloaiphong: state.phong.updateloaiphong
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
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
