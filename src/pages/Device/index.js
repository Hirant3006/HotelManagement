import React from "react";
import { connect } from "react-redux";
import { reset } from 'redux-form';
import  { Tabs } from "antd";
import LoaiThietBi from './LoaiThietBi/index';
//import Phong from './Phong'
import {
    getListLoaiTBRequest,
    addLoaiTBRequest,
  findLoaiTBTheoIdRequest,
  deleteLoaiTBRequest,
  updateLoaiTBRequest
} from "../../actions/loaithietbi";


const TabPane = Tabs.TabPane;

class Device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListLoaiTBRequest();
    //this.props.getListPhongRequest();
  }

  render() {
    console.log(this.props);
    // const {khachhang} = this.props;
     const {loaiTB} = this.props;
    return ( 
        <Tabs defaultActiveKey="1" >
          {/* <TabPane tab="Thiết Bị" key="1">
            <Phong {...this.props}/>
          </TabPane> */}
          <TabPane tab="Loại thiết bị" key="1">
           <LoaiThietBi {...this.props} />
          </TabPane>
        </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
  //  loaiphong: state.phong.loaiphong,
  loaithietbi : state.loaithietbi.loaithietbi
  };
};

const mapDispatchToProps = {
  getListLoaiTBRequest,
  addLoaiTBRequest,
  findLoaiTBTheoIdRequest,
  deleteLoaiTBRequest,
  updateLoaiTBRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Device);
