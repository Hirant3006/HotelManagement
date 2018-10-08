import React from "react";
import { connect } from "react-redux";
//import  { Tabs } from "antd";
import HuHong from './HuHong'

import{
  getListHuHongRequest,
} from "../../actions/huhong";



class Repair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
    // console.log(this.props);
    //this.props.getListLoaiPhongRequest();
    this.props.getListHuHongRequest();
    // this.props.addLoaiPhongRequest('Phòng tập thể',80000);
    // this.props.findLoaiPhongTheoIdRequest('5b94986892bf312fe4c4b729');
    // this.props.deleteLoaiPhongTheoIdRequest('5b97a19416e89100200353e9');
    // this.props.updateLoaiPhongTheoIdRequest('5b95b529f2b348128caef66e','Phòng VIPP',20000000)
  }

  render() {
   console.log(this.props);
   const {huhong} = this.props;
   console.log(huhong);
    return ( 
      <div>
   
         
           <HuHong {...this.props} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   // phong : state.phong.phong,
    //loaiphong: state.loaiphong.loaiphong,
  // khachhang: state.khachhang.khachhang,
    // loaiphong: state.phong.loaiphongtheoid,
    huhong: state.huhong.huhong
  };
};

const mapDispatchToProps = {
  
  getListHuHongRequest,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repair);
