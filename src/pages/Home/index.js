import React, { PureComponent } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import CustomCard from "./CustomCard";
import { List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest } from "../../actions/datphong";

=======
// import CustomCard from "./CustomCard";
import { Card, List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest } from "../../actions/datphong";
import ModalPhong from "./ModalPhong";

const gridStyleEmpty = {
  width: "25%",
  textAlign: "center"
};

const gridStyleBook = {
  width: "25%",
  textAlign: "center",
  color: "yellow"
};

>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false
    };
<<<<<<< HEAD
  }

  componentWillmount() {
    console.log('component will mount !!!')
=======
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
  }

  componentDidMount() {
    console.log('component will did mount !!!')
  }

  componentWillReceiveProps(prespros,nextpros) {
    console.log('Prespros :' + prespros);
    console.log('Nextpros :' )
  }

<<<<<<< HEAD
  ontoggleModalOpen = () => {
    // pickCardPhong(data);
=======
  handleOnclick = data => {
    pickCardPhong(data);
  };

  ontoggleModalOpen = () => {
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
    this.setState({
      visibleModalPhong: true
    });
  };

  ontoggleModalClose = () => {
    this.setState({
      visibleModalPhong: false
    });
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
    );
  }
}

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
    loaiphong: state.loaiphong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong
=======
    phong: state.phong.phong,
    dataPhong: state.phong.dataPhong,
    datphongbyphong: state.datphong.datphongbyphong
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
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
<<<<<<< HEAD
=======

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
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
