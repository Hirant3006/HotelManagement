import React, { Component } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { Table, Divider, Button, Icon, Row, Popconfirm } from "antd";
import { Field, reduxForm } from "redux-form";
export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
      // visibleSuaLoaiPhong: false,
      // dataSualoaiphong: {TenLoai:'',DonGia:0},
    };
  }

  columns = [
    {
      title: "Khách hàng",
      dataIndex: "KhachHang.HoTen",
      key: "_id"
    },
    {
      title: "Phòng",
      dataIndex: "Phong.SoPhong"
    },
    {
      title: "Ngày đến",
      dataIndex: "NgayDen",
      render: date => {
        var dateTime = new Date(date);
        return (dateTime = moment(dateTime).format("DD-MM-YYYY"));
      }
    },
    {
      title: "Ngày đi",
      dataIndex: "NgayDi",
      render: date => {
        var dateTime = new Date(date);
        return (dateTime = moment(dateTime).format("DD-MM-YYYY"));
      }
    },
    {
      title: "Online Booking",
      dataIndex: "Online"
    },
  ];

  render() {
    const { datphong } = this.props;
    //const { visibleSuaLoaiPhong } = this.state;

    return (
      <div>
        <Row>
          <Table
            loading={datphong.isFectching}
            columns={this.columns}
            dataSource={datphong.data}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />
        </Row>
      </div>
    );
  }
}
