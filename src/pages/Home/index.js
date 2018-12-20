import React from "react";
import { connect } from "react-redux";
// import CustomCard from "./CustomCard";
import { Card, List, Col, Row, Button, Layout, Avatar, Spin, Icon } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import {
  getDatPhongByPhongRequest,
  addDatPhongRequest,
  getThanhToanByDatPhongRequest,
  addThanhToanRequest,
  checkoutDatPhongRequest,
  checkinDatPhongRequest,
  addDichVuByPhongRequest
} from "../../actions/datphong";
import { getListKhachHangRequest } from "../../actions/khachhang";
import { getListDVRequest } from "../../actions/dichvu";
import ModalPhong from "./ModalPhong";
import ModalDatPhong from "./ModalDatPhong";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sophong: 0,
      phongtrong: 0,
      phongconguoi: 0,
      visibleModalPhong: false,
      visibleModalDatPhong: false,
      visibleModalThanhToan: false
    };
  }

  componentDidMount() {
    this.props.getListKhachHangRequest();
    this.props.getListPhongRequest();
    this.props.getListDVRequest();
  }

  handleOnclick = data => {
    pickCardPhong(data);
  };

  ontoggleModalOpen = () => {
    this.setState({
      visibleModalPhong: true
    });
  };

  ontoggleModalClose = () => {
    this.setState({
      visibleModalPhong: false
    });
  };

  ontoggleModalDatPhongOpen = () => {
    this.setState({
      visibleModalDatPhong: true
    });
  };

  ontoggleModalDatPhongClose = () => {
    this.setState({
      visibleModalDatPhong: false
    });
  };

  handleRenderList = data =>
    data.map(item => {
      if (item.TrangThai === "false")
        return (
          <Card.Grid
            key={item._id}
            style={{
              width: "25%",
              textAlign: "center",
              backgroundColor: "#FFFA51",
              border: "solid"
            }}
            onClick={() => {
              const { getListPhongRequest } = this.props;
              this.ontoggleModalOpen();
              this.props.pickCardPhong(item);
              this.props.getDatPhongByPhongRequest(item._id);
            }}
          >
            {item.SoPhong}
            <hr />
            {item.LoaiPhong.TenLoaiPhong}
          </Card.Grid>
        );
      else
        return (
          <Card.Grid
            key={item._id}
            style={{
              width: "25%",
              textAlign: "center",
              backgroundColor: "#A8FFD4",
              border: "solid"
            }}
            onClick={() => {
              this.ontoggleModalOpen();
              // const { getListPhongRequest } = this.props;
              this.props.pickCardPhong(item);
              this.props.getDatPhongByPhongRequest(item._id);
            }}
          >
            {item.SoPhong}
            <hr />
            {item.LoaiPhong.TenLoaiPhong}
          </Card.Grid>
        );
    });

  render() {
    const { phong, dataPhong, datphongbyphong } = this.props;
    if (phong.listPhong.length !== 0) {
      console.log(phong);
      console.log(phong.listPhong.length);
      let phongtrong = 0;
      let phongconguoi = 0;
      // const listphong= phong.listphong;
      console.log(phong.listPhong);
      for (let i=0;i<phong.listPhong.length;i++) {
        if (phong.listPhong[i].TrangThai === "true") {
          phongtrong++;
        } else phongconguoi++;
      }
      this.setState({
        phongtrong,
        phongconguoi,
        sophong: phong.listPhong.length
      });
    }
    console.log("List props ", this.props);
    return (
      <div>
        <Row>
          <Col span="21">
            <Card title="Danh sách phòng ">
              {!phong.isFetching ? (
                this.handleRenderList(phong.listPhong)
              ) : (
                <Spin />
              )}
            </Card>
          </Col>
          <Col span="3">
            <Row>
              <Button
                style={{
                  float: "right",
                  marginBottom: "0.5rem",
                  width: "6rem"
                }}
                onClick={this.ontoggleModalDatPhongOpen}
              >
                Đặt phòng
              </Button>
            </Row>
            <div
              style={{
                float: "right",
                marginBottom: "0.5rem",
                width: "6rem",
                fontSize: "8pt"
              }}
            >
              {/* Trạng Thái :
              <Icon type="file" style={{fontSize:"16px",color:"#A8FFD4"}}  /> */}
              <table class="src">
                <tbody>
                  <tr>
                    <th width="70%">Tình trạng</th>
                    <th width="30%" />
                  </tr>
                  <tr>
                    <td>Phòng: </td>
                    <td>{this.state.sophong}</td>
                  </tr>
                  <tr>
                    <td>Trống: </td>
                    <td>{this.state.phongtrong}</td>
                  </tr>
                  <tr>
                    <td>Đầy:</td>
                    <td>{this.state.phongconguoi}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                float: "right",
                marginBottom: "0.5rem",
                width: "6rem",
                fontSize: "8pt"
              }}
            >
              {/* Trạng Thái :
              <Icon type="file" style={{fontSize:"16px",color:"#A8FFD4"}}  /> */}
              <table class="src">
                <tbody>
                  <tr>
                    <th width="50%">Màu</th>
                    <th width="50%">Trạng Thái</th>
                  </tr>
                  <tr>
                    <td bgcolor="#A8FFD4">&nbsp;</td>
                    <td>Trống</td>{" "}
                  </tr>
                  <tr>
                    <td bgcolor="#FFFA51">&nbsp;</td>
                    <td>Có người</td>{" "}
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            {/* <Button></Button> */}
          </Col>
        </Row>
        <ModalPhong
          visible={this.state.visibleModalPhong}
          showModal={this.ontoggleModalOpen}
          onCancel={this.ontoggleModalClose}
          data={this.state.dataPhong}
          {...this.props}
        />
        <ModalDatPhong
          visible={this.state.visibleModalDatPhong}
          showModal={this.ontoggleModalDatPhongOpen}
          onCancel={this.ontoggleModalDatPhongClose}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    dataPhong: state.phong.dataPhong,
    datphongbyphong: state.datphong.datphongbyphong,
    khachhang: state.khachhang.khachhang,
    adddatphong: state.datphong.adddatphong,
    dichvu: state.dichvu.dichvu,
    thanhtoan: state.datphong.thanhtoanbydatphong,
    addtthanhtoan: state.datphong.addtthanhtoan,
    checkoutdatphong: state.datphong.checkoutdatphong,
    checkindatphong: state.datphong.checkindatphong,
    adddichvubyphong: state.datphong.adddichvubyphong
  };
};

const mapDispatchToProps = {
  addThanhToanRequest,
  getListPhongRequest,
  getDatPhongByPhongRequest,
  pickCardPhong,
  addThanhToanRequest,
  getListKhachHangRequest,
  addDatPhongRequest,
  getListDVRequest,
  getThanhToanByDatPhongRequest,
  checkoutDatPhongRequest,
  checkinDatPhongRequest,
  addDichVuByPhongRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
