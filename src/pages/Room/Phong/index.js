import React from "react";
import { Row, Col, Spin, Select, Button, Icon, Table } from "antd";
import ListPhong from "./ListPhong";
import { connect } from "react-redux";
import Phong from "../Phong"
import ModalThemPhong from "./ModalThemPhong"
import{
  getListPhongRequest,
} from "../../../actions/phong";
const Option = Select.Option;

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Phong: [],

    };
  }
 

  columns = [
    {
      title: "Tầng",
      dataIndex: "Tang",
      key: "Tang"
    },
    {
      
      title: "Số Phòng",
      dataIndex: "SoPhong",
      key: "_id"
    },
    {
      title: "Loại Phòng",
      dataIndex: "LoaiPhong.TenLoaiPhong",
      key: "SoPhong"
    }
    
   
  ];
  handleChange = value => {
    let listphongfilter = this.state.Phong;
    listphongfilter=listphongfilter.filter(phong => phong.TenLoaiPhong === value);
    console.log(listphongfilter)
    this.setState=({Phong:listphongfilter})
  };

  render() {
    // this.props.phong
    //   ? this.setState({ Phong: this.props.phong.listPhong })
    //   : null;
    const { listLoaiPhong, loaiphong, phong } = this.props;
    return (
    
      // <Col span={20}>
      //   <Row>
      //     <Select
      //       showSearch
      //       style={{ width: 200 }}
      //       placeholder="Select room type"
      //       optionFilterProp="children"
      //       onChange={this.handleChange}
      //       // onFocus={handleFocus}
      //       // onBlur={handleBlur}
      //       filterOption={(input, option) =>
      //         option.props.children
      //           .toLowerCase()
      //           .indexOf(input.toLowerCase()) >= 0
      //       }
      //     >
      //       {this.props.loaiphong.listloaiPhong
      //         ? this.props.loaiphong.listloaiPhong.map(loaiphong => {
      //             return (
      //               <Option key={loaiphong._id} value={loaiphong._id}>
      //                 {loaiphong.TenLoai}
      //               </Option>
      //             );
      //           })
      //         : null}
      //       {/* <Option value="jack">Phòng đơn</Option>
      //         <Option value="lucy">Phòng đôi</Option>
      //         <Option value="tom">Phòng vip</Option> */}
      //     </Select>
      //     <Button style={{ float: "right" }} type="primary">
      //       Đặt phòng
      //     </Button>
      //   </Row>
      //   ,
      //   {this.props.phong.isFetching ? (
      //     <Row
      //       style={{
      //         // marginTop: "50px",
      //         marginLeft: "auto",
      //         marginRight: "auto",
      //         width: "8em"
      //       }}
      //     >
      //       <Spin />
      //     </Row>
      //   ) : (
      //     <ListPhong dataSource={this.state.Phong} {...this.props} />
      //   )}
      // </Col>
      <div>
        
      <Row>
        {/* <Button
          type="primary"
          onClick={this.onToggleModal}
          style={{ float: "right", marginBottom: 10 }}
        >
          <Icon type="file-add" />
        </Button> */}
      </Row>
      <Row>
        <Table
          loading={phong.isFetching}
          columns={this.columns}
          dataSource={phong.listPhong}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
        />
         <ModalThemPhong
            visible={this.state.visible}
            // showModal={this.showModal}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            {...this.props}
          />
        {/* <ModalThemLoaiPhong
          visible={this.state.visible}
          // showModal={this.showModal}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          {...this.props}
        />
        {visibleSuaLoaiPhong ?
        <ModalSuaLoaiPhong
          visible={this.state.visibleSuaLoaiPhong}
          // showModal={this.showModal}
          onCancel={this.handleCancelSuaLoaiPhong}
          onOk={this.handleOkSuaLoaiPhong}
          data={this.state.dataSualoaiphong}
          {...this.props}
        /> : null } */}
      </Row>
    </div>

    );
  }
}
const mapStateToProps = state => {
  return {
   phong : state.phong.phong,
    //loaiphong: state.loaiphong.loaiphong,
  //  khachhang: state.khachhang.khachhang,
  // loaiphong: state.phong.loaiphongtheoid,
  //addphong: state.khachhang.addkhachhang,
  addphong: state.phong.addphong,
  };
};
const mapDispatchToProps = {
  
  getListPhongRequest,
  
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
