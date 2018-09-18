import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Divider, Button, Icon, Row, Popconfirm } from "antd";
import ModalThemLoaiPhong from "./ModalThemLoaiPhong";

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  columns = [
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
          {this.props.deleteloaiphong.isFetching ? (
            <Icon type="loading" />
          ) : (
            <Popconfirm
              title="Bạn có chắc muốn xóa loại phòng này?"
              onConfirm={() =>this.handelDeleteLoaiPhong(record)}
              okText="Có"
              cancelText="Không"
            >
              <a style={{color:"red"}}>Xóa</a>
            </Popconfirm>
            // <a
            //   style={{ color: "red" }}
            //   onClick={() => this.handelDeleteLoaiPhong(record)}
            // >
            //   Xóa
            // </a>
          )}
        </span>
      )
    }
  ];

  handelDeleteLoaiPhong = record => {
    console.log(record);
    const { deleteLoaiPhongTheoIdRequest,getListPhongRequest } = this.props;
    const id = record._id;
    deleteLoaiPhongTheoIdRequest(id,getListPhongRequest);
  };

  handleOk = e => {
    console.log("Ok");
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    this.props.reset('them-loai-phong')
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { loaiphong } = this.props;
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
            columns={this.columns}
            dataSource={loaiphong.listloaiPhong}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />
          <ModalThemLoaiPhong
            visible={this.state.visible}
            showModal={this.showModal}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            {...this.props}
          />
        </Row>
      </div>
    );
  }
}
