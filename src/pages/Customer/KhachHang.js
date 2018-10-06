import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Divider,Button ,Icon,Row } from "antd";
import ModalThemLoaiPhong from "../Room/Component/ModalThemLoaiPhong";
import khachhang from "../../reducers/khachhang";
import CustomerTable from './CustomTable'
import ModalThemKhachHang from './ModalThemKhachHang/index'
const columns = [
  {
    title: "Giới Tính ",
    dataIndex: "GioiTinh",
    key: "GioiTinh"
  },
  {
    title: "Họ Tên",
    dataIndex: "HoTen",
    key: "_id"
  },
  {
    title: "CMND",
    dataIndex: "CMND",
    key: "CMND"
  },
  {
    title: "Ngày sinh",
    dataIndex: "NgaySinh",
    key: "NgaySinh",
  },
  {
    title: "Địa chỉ",
    dataIndex: "DiaChi",
    key: "Diachi"
  },
  {
    title: "Quốc Tịch",
    dataIndex: "QuocTich",
    key: "QuocTich"
  },
  // {
  //   title: "SĐT",
  //   dataIndex: "SDT",
  //   key: "SDT"
  // },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email"
  },

];

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
       visible: false }
  }

  handleOk = (e) => {
    console.log('Ok');
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log('Cancel');
    this.setState({
      visible: false,
    });
  }

  onToggleModal = (e) => {
    console.log('Toggle')
		this.setState({ visible: !this.state.visible })
	}
 
  render() {
    const { khachhang } = this.props;
    console.log(this.props);
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
        <Row>
        <Table
          loading={khachhang.isFetching}
          columns={columns}
          dataSource={khachhang.listKhachhang}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
        />
      
        <ModalThemKhachHang visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel} onOk={this.handleOk} {...this.props}/>

        </Row>
      </div>
    );
  }
}
