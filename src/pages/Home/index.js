import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getListLoaiPhongRequest,addLoaiPhongRequest,findLoaiPhongTheoIdRequest,deleteLoaiPhongTheoIdRequest,updateLoaiPhongTheoIdRequest } from "../../actions/loaiphong";
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
   loaiphong: state.loaiphong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong,
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
