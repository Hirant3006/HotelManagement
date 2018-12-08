import React, { Component } from "react";
import "antd/dist/antd.css";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import { Table, Divider, Button, Icon, Row, Popconfirm, Form } from "antd";
import ModalThemLoaiKhachHang from "./ModalThemLoaiKhachHang";
import ModalSuaLoaiKhachHang from "./ModalSuaLoaiKhachHang";
import ModalThemKhachHang from "../ModalThemKhachHang"

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleSuaLoaiKH: false,
      dataSualoaiKH: {TenLoaiKhach:''},
    };
  }

  columns = [
    {
      title: "Loại Khách Hàng",
      dataIndex: "TenLoaiKhach",
      key: "_id",
      
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <span>
          <a onClick={() => this.onToggleModalSuaLoaiKH(record)}>Sửa</a>
          <Divider type="vertical" />
          {this.props.deleteloaikhachhang.isFetching ? (
            <Icon type="loading" />
          ) : (
            <Popconfirm
              title="Bạn có chắc muốn xóa loại khách hàng này?"
              onConfirm={() =>this.handelDeleteLoaiKH(record)}
              okText="Có"
              cancelText="Không"
            >
              <a style={{color:"red"}}>Xóa</a>
            </Popconfirm>

            
          )}
        

        {/* <a style={{color:"green"}} onClick={() => this.handleThemKhachHang(record)}>Thêm Khách Hàng</a>
          */}


        </span>
      )
    }
  ];
  
  handelDeleteLoaiKH = record => {
    const { deleteLoaiKHRequest,getListLoaiKhachHangRequest } = this.props;
    const id = record._id;
    deleteLoaiKHRequest(id,getListLoaiKhachHangRequest);
    }
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    this.props.reset('them-loai-khachhang')
  };

  handleOkSuaLoaiKH = e => {
    this.setState({
      visibleSuaLoaiKH: false
    });
  };

  handleCancelSuaLoaiKH = e => {
    this.setState({
      visibleSuaLoaiKH: false
    });
    this.props.reset('sua-loai-khachhang')
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
  };

  onToggleModalSuaLoaiKH = (record) => {
    this.setState({ visibleSuaLoaiKH: !this.state.visibleSuaLoaiKH , dataSualoaiKH: record});
  }
  
  render() {
    const { loaikhachhang ,khachhang} = this.props;
    console.log(this.props);
    const { visibleSuaLoaiKH } = this.state;
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
            loading={loaikhachhang.isFetching}
            columns={this.columns}
            dataSource={loaikhachhang.listLoaiKH}
            rowKey="_id"
            pagination={{ pageSize: 15 }}
            {...this.props}
          />

          <ModalThemLoaiKhachHang
            visible={this.state.visible}
            showModal={this.showModal}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            {...this.props}
          />


        
        
       {visibleSuaLoaiKH ?
          <ModalSuaLoaiKhachHang
            visible={this.state.visibleSuaLoaiKH}
            // showModal={this.showModal}
            onCancel={this.handleCancelSuaLoaiKH}
            onOk={this.handleOkSuaLoaiKH}
            data={this.state.dataSualoaiKH}
            {...this.props}
          /> : null }
          </Row>
          
      </div>
    );
  }
  }

