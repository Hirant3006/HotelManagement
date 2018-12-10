import React from "react";
import { connect } from "react-redux";
//import  { Tabs } from "antd";
import KhachHang from './KhachHang'

import{
  getListKhachHangRequest,
  addKhachHangRequest,
} from "../../actions/khachhang";

//onst TabPane = Tabs.TabPane;

class Customer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    this.props.getListKhachHangRequest();
  }

  render() {
   console.log(this.props);
   const {khachhang} = this.props;
   console.log(khachhang);
    return ( 
     
       <div>
        {/* <Tabs defaultActiveKey="1" >
          <TabPane> */}
            <KhachHang {...this.props}/>
          {/* </TabPane>
        </Tabs> */}
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
