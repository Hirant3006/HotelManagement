import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getListPhongRequest,addLoaiPhongRequest,findLoaiPhongTheoIdRequest,deleteLoaiPhongTheoIdRequest,updateLoaiPhongTheoIdRequest } from "../../actions/phong";
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
   loaiphong: state.phong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.phong.deleteloaiphong,
    updateloaiphong: state.phong.updateloaiphong,
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  addLoaiPhongRequest,
  findLoaiPhongTheoIdRequest,
  deleteLoaiPhongTheoIdRequest,
  updateLoaiPhongTheoIdRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
