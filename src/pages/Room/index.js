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
    // console.log(this.props);
    this.props.getListPhongRequest();
    // this.props.addLoaiPhongRequest('Phòng tập thể',80000);
    // this.props.findLoaiPhongTheoIdRequest('5b94986892bf312fe4c4b729');
    // this.props.deleteLoaiPhongTheoIdRequest('5b97a19416e89100200353e9');
    // this.props.updateLoaiPhongTheoIdRequest('5b95b529f2b348128caef66e','Phòng VIPP',20000000)
  }

  render() {
   console.log(this.props);
   const {loaiphong} = this.props;
   console.log(loaiphong);
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
