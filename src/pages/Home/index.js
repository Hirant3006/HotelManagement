import React from "react";
import { connect } from "react-redux";
// import CustomCard from "./CustomCard";
import { Card, List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest,addDatPhongRequest } from "../../actions/datphong";
import { getListKhachHangRequest } from "../../actions/khachhang"
import ModalPhong from "./ModalPhong";
import ModalDatPhong from "./ModalDatPhong";
import {getListDVRequest } from "../../actions/dichvu";
import ModalThemDV from "./ModalPhong/ModalThemDV/index"
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false,
      visibleModalDatPhong: false,
    //  visibleDichVu: false,
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


  ontoggleModalDichVuOpen = () => {
    this.setState({
     // visibleDichVu: true
    });
  };

  ontoggleModalDichVuClose = () => {
    this.setState({
      visibleDichVu: false
    });
  };
  handleRenderList = data =>
    data.map(item => {
      console.log("Data ", item);
      if (item.TrangThai == "false")
        return (
          <Card.Grid
            key={item._id}
            style={{ width: "25%", textAlign: "center" ,backgroundColor:"#FFFA51",border:"solid"}}
            onClick={() => {
              this.ontoggleModalOpen();
              this.props.pickCardPhong(item);
              this.props.getDatPhongByPhongRequest(item._id);
            }}
          >
            {item.SoPhong}
          </Card.Grid>
        );
      else
        return (
          <Card.Grid
            key={item._id}
            style={{ width: "25%", textAlign: "center",backgroundColor:"#A8FFD4",border:"solid"}}
            // onClick={() => {
            //   this.ontoggleModalOpen();
            //   this.props.pickCardPhong(item);
            // }}
          >
            {item.SoPhong}
          </Card.Grid>
        );
    });

  render() {
    const { phong, dataPhong, datphongbyphong } = this.props;
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
            <Button
              style={{ float: "right", marginBottom: "0.5rem", width: "6rem" }}
              onClick={this.ontoggleModalDatPhongOpen}
            >
              Đặt phòng
            </Button>
            <Button
              style={{ float: "right", marginBottom: "0.5rem", width: "6rem" }}
            >
              Thanh toán
            </Button>
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
<<<<<<< HEAD
    dichvu: state.dichvu.dichvu,
=======
    adddatphong : state.datphong.adddatphong,
>>>>>>> 003a9ce64e55bb0c6c84c060e56eb0c1c30aeafe
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  getDatPhongByPhongRequest,
  pickCardPhong,
  getListKhachHangRequest,
<<<<<<< HEAD
  getListDVRequest,
=======
  addDatPhongRequest
>>>>>>> 003a9ce64e55bb0c6c84c060e56eb0c1c30aeafe
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
<<<<<<< HEAD

// const sample = <Row>
// <Col span={18}>
//   {dataPhong === null ? (
//     <b>Hotel Management Application 0.1</b>
//   ) : (
//     // <div style={{ padding: 24, background: "#fff", height: "auto" }}>
//     <Row>
//       <Col span={18}>
//         {dataPhong != null ? (
//           <div>
//             <b>Tầng :</b> {dataPhong.Tang.TenTang}
//             <b style={{ marginLeft: "2rem" }}>Loại phòng :</b>{" "}
//             {/* {dataPhong.LoaiPhong[0].TenLoaiPhong} */}
//             <List
//               title="DS dịch vụ"
//               itemLayout="horizontal"
//               dataSource={
//                 datphongbyphong.listdatphong.ChiTietSuDungDichVu
//               }
//               pagination={{
//                 onChange: page => {
//                   console.log(page);
//                 },
//                 pageSize: 3
//               }}
//               renderItem={item => (
//                 <List.Item>
//                   <List.Item.Meta description={item.DichVu[0]} />
//                 </List.Item>
//               )}
//             />
//           </div>
//         ) : (
//           "Không có dữ liệu"
//         )}
//       </Col>
//       <Col span={6}>Hello</Col>
//     </Row>
//     // </div>
//   )}
// </Col>
// <Col span={6}>Hello</Col>
// </Row>
// <Row>
// <Col span={24}>
//   {phong.isFetching === true ? (
//     <Spin />
//   ) : (
//     <List
//       grid={{
//         gutter: 16,
//         xs: 1,
//         sm: 2,
//         md: 3,
//         lg: 3,
//         xl: 4,
//         xxl: 3
//       }}
//       dataSource={phong.listPhong}
//       renderItem={item => (
//         <List.Item>
//           <CustomCard
//             data={item}
//             onOpenModal={this.ontoggleModalOpen}
//             {...this.props}
//           />
//         </List.Item>
//       )}
//     />
//   )}
// </Col>
// <Col
//   span={5}
//   style={{
//     textAlign: "center",
//     marginLeft: "1rem",
//     marginRight: "1rem"
//   }}
// />
// </Row>
=======
>>>>>>> 003a9ce64e55bb0c6c84c060e56eb0c1c30aeafe
