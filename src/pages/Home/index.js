import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CustomCard from "./CustomCard";
import { List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest } from "../../actions/datphong";
import { getListKhachHangRequest } from "../../actions/khachhang"
import ModalPhong from "./ModalPhong";
import ModalDatPhong from "./ModalDatPhong";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false,
      visibleModalDatPhong: false,
    };
  }

  componentWillmount() {
    console.log('component will mount !!!')
  }

  componentDidMount() {
    this.props.getListKhachHangRequest();
    this.props.getListPhongRequest();
  }

  componentWillReceiveProps(prespros,nextpros) {
    console.log('Prespros :' + prespros);
    console.log('Nextpros :' )
  }

  ontoggleModalOpen = () => {
    // pickCardPhong(data);
    this.setState({
      visibleModalPhong: true
    });
  };

  ontoggleModalClose = () => {
    this.setState({
      visibleModalPhong: false
    });
  };

  render() {
    console.log('render !!!!');
    return (
      <Button
        type="primary"
        htmlType="submit"
        className="button"
        // loading={addloaiphong.isFetching} // true
        // disabled={addloaiphong.isFetching}
      >
        Tạo
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    loaiphong: state.loaiphong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  getDatPhongByPhongRequest,
  pickCardPhong,
  getListKhachHangRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
