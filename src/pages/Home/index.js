import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getListPhongRequest,addLoaiPhongRequest,findLoaiPhongTheoIdRequest,deleteLoaiPhongTheoIdRequest,updateLoaiPhongTheoIdRequest } from "../../actions/phong";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getListPhongRequest();
    // this.props.addLoaiPhongRequest('Phòng tập thể',80000);
    // this.props.findLoaiPhongTheoIdRequest('5b94986892bf312fe4c4b729');
    // this.props.deleteLoaiPhongTheoIdRequest('5b97a19416e89100200353e9');
    this.props.updateLoaiPhongTheoIdRequest('5b95b529f2b348128caef66e','Phòng VIPP',20000000)
  }


  render() {
    
    console.log(this.props);
    return <div>Homepages</div>;
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    loaiphong: state.phong.loaiphongtheoid,
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
