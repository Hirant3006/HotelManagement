import React from "react";
import { connect } from "react-redux";
import  { Tabs } from "antd";
import { reset } from 'redux-form';
import LoaiPhong from './LoaiPhong';
import Phong from './Phong'
import {
  getListPhongRequest,
  getListLoaiPhongRequest,
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
    this.props.getListLoaiPhongRequest();
    this.props.getListPhongRequest();
  }

  render() {
   console.log(this.props);
   const {loaiphong} = this.props;
   console.log(loaiphong);
    return ( 
      <div>
        <Tabs defaultActiveKey="1" >
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
    loaiphong: state.phong.loaiphong,
    phong: state.phong.phong,
    addloaiphong : state.phong.addloaiphong,
    deleteloaiphong: state.phong.deleteloaiphong,
    updateloaiphong: state.phong.updateloaiphong
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
