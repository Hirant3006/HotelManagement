import React, { Component } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { Table, Divider, Button, Icon, Row, Popconfirm } from "antd";
import { Field, reduxForm } from "redux-form";
import ModalXacNhan from "./ModalXacNhan";
export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalXacNhan: false,
      // visibleSuaLoaiPhong: false,
      dataBookphong: null
    };
  }

  onToggleModalXacNhanOpen = record => {
    this.props.getPhongRequest(record.Phong);
    this.setState({ visibleModalXacNhan: true, dataBookphong: record });
  };

  onToggleModalXacNhanClose = () => {
    this.setState({ visibleModalXacNhan: false });
  };

  columns = [
    {
      title: "Khách hàng",
      dataIndex: "HoTen",
      key: "_id"
    },
    {
      title: "Email",
      dataIndex: "Email"
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
        return (dateTime = moment(dateTime).format("DD-MM-YYYY "));
      }
    },
    {
      title: "Ngày tạo",
      dataIndex: "NgayTao",
      render: date => {
        var dateTime = new Date(date);
        return (dateTime = moment(dateTime).format("DD-MM-YYYY HH:mm"));
      }
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => {
        console.log(record);
        return (
          <div>
            {record.Step === 2 ? (
              <div>Đã xác nhận  </div>
            ) : (
              <span>
                <a onClick={() => this.onToggleModalXacNhanOpen(record)}>
                  Xác nhận{" "}
                </a>
              </span>
            )}
            <Popconfirm
              title="Bạn có chắc muốn xóa đơn này?"
              onConfirm={() => this.handelDeleteBooking(record)}
              okText="Có"
              cancelText="Không"
            >
              <a style={{ color: "red" }}>Xóa</a>
            </Popconfirm>
          </div>
        );
      }
    }
  ];

  render() {
    const { datphong, datphongonline } = this.props;
    //const { visibleSuaLoaiPhong } = this.state;
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
            loading={datphongonline.isFectching}
            columns={this.columns}
            dataSource={datphongonline.data}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />
        </Row>
        <ModalXacNhan
          visible={this.state.visibleModalXacNhan}
          showModal={this.onToggleModalXacNhanOpen}
          onCancel={this.onToggleModalXacNhanClose}
          data={this.state.dataBookphong}
          {...this.props}
        />
      </div>
    );
  }
}
