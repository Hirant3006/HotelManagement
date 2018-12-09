import React from "react";
import { connect } from "react-redux";
// import CustomCard from "./CustomCard";
import { Card, List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest } from "../../actions/datphong";
import ModalPhong from "./ModalPhong";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false
    };
  }

  componentDidMount() {
    this.props.getListPhongRequest();
  }

  ontoggleModalOpen = () => {
    // pickCardPhong(data);
    this.setState({
      visibleModalPhong: true
    });
  };

  ontoggleModalClose = () => {
    console.log('Close modal')
    this.setState({
      visibleModalPhong: false
    });
  };

  handleRenderList = data =>
    data.map(item => {
      console.log("Data ", item);
      return (
        <Card.Grid key={item._id} style={gridStyle} onClick={this.ontoggleModalOpen}>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    dataPhong: state.phong.dataPhong,
    datphongbyphong: state.datphong.datphongbyphong
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  getDatPhongByPhongRequest,
  pickCardPhong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

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
