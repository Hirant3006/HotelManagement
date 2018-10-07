import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Divider, Button, Icon, Row, Popconfirm } from "antd";
import ModalThemLoaiPhong from "./ModalThemLoaiPhong";
import ModalSuaLoaiPhong from './ModalSuaLoaiPhong';

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleSuaLoaiPhong: false,
      dataSualoaiphong: {TenLoai:'',DonGia:0},
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
          <a onClick={() => this.onToggleModalSuaLoaiPhong(record)}>Sửa</a>
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
          )}
        </span>
      )
    }
  ];

  handelDeleteLoaiPhong = record => {
    const { deleteLoaiPhongTheoIdRequest,getListLoaiPhongRequest } = this.props;
    const id = record._id;
    deleteLoaiPhongTheoIdRequest(id,getListLoaiPhongRequest);
  };

  handleOk = e => {
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

  handleOkSuaLoaiPhong = e => {
    this.setState({
      visibleSuaLoaiPhong: false
    });
  };

  handleCancelSuaLoaiPhong = e => {
    this.setState({
      visibleSuaLoaiPhong: false
    });
    this.props.reset('sua-loai-phong')
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
  };

  onToggleModalSuaLoaiPhong = (record) => {
    this.setState({ visibleSuaLoaiPhong: !this.state.visibleSuaLoaiPhong , dataSualoaiphong: record});
  };

  render() {
    console.log(this.props);
    const { loaiphong } = this.props;
    const { visibleSuaLoaiPhong } = this.state;
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
          /> : null }
        </Row>
      </div>
    );
  }
}
