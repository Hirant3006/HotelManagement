import React from "react";
import { connect } from "react-redux";
import { reset } from 'redux-form';
import  { Tabs ,Select} from "antd";
import KhachHang from './KhachHang'
import LoaiKhachHang from './LoaiKhachHang/index'
import{
  getListKhachHangRequest,
  addKhachHangRequest,
  
} from "../../actions/khachhang";
import { 
  getListLoaiKhachHangRequest,
  addLoaiKHRequest,
  findLoaiKHRequest,
  deleteLoaiKHRequest,
  updateLoaiKHRequest,

} from "../../actions/loaikhachhang"
const Option = Select.Option;
//onst TabPane = Tabs.TabPane;
const TabPane = Tabs.TabPane;
class Customer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  componentDidMount() {
    this.props.getListKhachHangRequest();
    this.props.getListLoaiKhachHangRequest();
  }

  render() {
   console.log(this.props);
  // const {khachhang} = this.props;
   const {loaikhachhang} = this.props;
 //  console.log(khachhang);
   console.log(loaikhachhang);
    return ( 
      // <div>
      //   {/* <Tabs defaultActiveKey="1" >
      //     <TabPane> */}
      //       <KhachHang {...this.props}/>
      //     {/* </TabPane>
      //   </Tabs> */}
      // </div>

<div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Khách Hàng" key="1">
          <KhachHang {...this.props}/>
          </TabPane>
          <TabPane tab="Loại Khách Hàng" key="2">
           <LoaiKhachHang {...this.props} />
          </TabPane>
        </Tabs>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
  
   khachhang: state.khachhang.khachhang,
   addkhachhang: state.khachhang.addkhachhang,
   //loaikhachhang : state.loaikhachhang.loaikhachhang,
   loaikhachhang : state.loaikhachhang.loaikhachhang,
   addloaikhachhang : state.loaikhachhang.addloaikhachhang,
   deleteloaikhachhang: state.loaikhachhang.deleteloaikhachhang,
   updateloaikhachhang: state.loaikhachhang.updateloaikhachhang
  };
};

const mapDispatchToProps = {
  
  getListKhachHangRequest,
  addKhachHangRequest,
  getListLoaiKhachHangRequest,
  addLoaiKHRequest,
  findLoaiKHRequest,
  deleteLoaiKHRequest,
  updateLoaiKHRequest,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);
