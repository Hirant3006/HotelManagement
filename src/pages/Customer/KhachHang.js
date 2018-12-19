import React, { Component } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { Table, Button, Icon, Row } from "antd";
// import ModalThemLoaiPhong from "../Room/Component/ModalThemLoaiPhong";
// import khachhang from "../../reducers/khachhang";
// import CustomerTable from './CustomTable'
import ModalThemKhachHang from "./ModalThemKhachHang/index";
const columns = [
  {
    title: "Họ Tên",
    dataIndex: "HoTen",
    key: "_id"
  },
   {
    title: "Ngày sinh",
    dataIndex: "NgaySinh",
    key: "NgaySinh",
    render: date => {
      var dateTime = new Date(date);
      return dateTime = moment(dateTime).format("DD-MM-YYYY");
    }
  },
  {
    title: "CMND",
    dataIndex: "CMND",
    key: "CMND"
  },
];

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleOk = e => {
    console.log("Ok");
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log("Cancel");
    this.setState({
      visible: false
    });
  };

  onToggleModal = e => {
    console.log("Toggle");
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { khachhang } = this.props;
    console.log("Khach Hang" ,this.props);
    return (
      <div>
        <Row>
          <Button
            type="primary"
            onClick={this.onToggleModal}
            style={{ float: "right", marginBottom: 10 }}
          >
            <Icon type="file-add" />
          </Button>
        </Row>
     
          <Table
            loading={khachhang.isFetching}
            columns={columns}
            dataSource={khachhang.listKhachhang}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />

          <ModalThemKhachHang
            visible={this.state.visible}
            showModal={this.showModal}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            {...this.props}
          />
      
      </div>
    );
  }
}
