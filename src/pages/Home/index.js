import React, { PureComponent } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import { getListLoaiPhongRequest,addLoaiPhongRequest,findLoaiPhongTheoIdRequest,deleteLoaiPhongTheoIdRequest,updateLoaiPhongTheoIdRequest } from "../../actions/loaiphong";
=======
import {
  getListPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
} from "../../actions/phong";
>>>>>>> 04a9204937dc0fa3ca0e481af69a0ec9edfa29c5
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Homepages</div>;
  }
}

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
   loaiphong: state.loaiphong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong,
=======
    loaiphong: state.phong.loaiphong,
    deleteloaiphong: state.phong.deleteloaiphong,
    updateloaiphong: state.phong.updateloaiphong
>>>>>>> 04a9204937dc0fa3ca0e481af69a0ec9edfa29c5
  };
};

const mapDispatchToProps = {
  getListLoaiPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
