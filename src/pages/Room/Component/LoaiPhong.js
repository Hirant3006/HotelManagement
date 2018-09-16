import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Divider,Button ,Icon,Row } from "antd";
import ModalThemLoaiPhong from "./ModalThemLoaiPhong";

const columns = [
  {
    title: "Tên",
    dataIndex: "TenLoai",
    key: "_id"
  },
  {
    title: "Đơn giá",
    dataIndex: "DonGia",
    key: "DonGia"
  },
  {
    title: "Thao tác",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Sửa</a>
        <Divider type="vertical" />
        <a style={{ color: "red" }}>Xóa</a>
      </span>
    )
  }
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
    const { loaiphong } = this.props;
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
          loading={loaiphong.isFetching}
          columns={columns}
          dataSource={loaiphong.listloaiPhong}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
        />
        <ModalThemLoaiPhong visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel} onOk={this.handleOk} {...this.props}/>
        </Row>
      </div>
    );
  }
}
