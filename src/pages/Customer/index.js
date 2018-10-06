import React from "react";
import { connect } from "react-redux";
import  { Tabs } from "antd";
import KhachHang from './KhachHang'

import{
  getListKhachHangRequest,
  addKhachHangRequest,
} from "../../actions/khachhang";

const TabPane = Tabs.TabPane;

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    // console.log(this.props);
    // this.props.getListLoaiPhongRequest();
    this.props.getListKhachHangRequest();
    // this.props.addKhachHangRequest();
    // this.props.addLoaiPhongRequest('Phòng tập thể',80000);
    // this.props.findLoaiPhongTheoIdRequest('5b94986892bf312fe4c4b729');
    // this.props.deleteLoaiPhongTheoIdRequest('5b97a19416e89100200353e9');
    // this.props.updateLoaiPhongTheoIdRequest('5b95b529f2b348128caef66e','Phòng VIPP',20000000)
  }

  render() {
   console.log(this.props);
   const {khachhang} = this.props;
   console.log(khachhang);
    return ( 
     
       <div>
        <Tabs defaultActiveKey="1" >
          <TabPane>
            <KhachHang {...this.props}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   // phong : state.phong.phong,
    //loaiphong: state.loaiphong.loaiphong,
   khachhang: state.khachhang.khachhang,
    // loaiphong: state.phong.loaiphongtheoid,
    addkhachhang: state.khachhang.addkhachhang,
  };
};

const mapDispatchToProps = {
  
  getListKhachHangRequest,
  addKhachHangRequest,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);
