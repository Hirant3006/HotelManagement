import React from "react";
import {
  Form,
  Modal,
  Col,
  Row,
  List,
  Avatar,
  Spin,
  Table,
  Button,
  Icon
} from "antd";
import datphong from "../../../reducers/datphong";
import { Form as ReduxForm, Field, reduxForm } from "redux-form";
import CustomInput from "../../../component/CustomInput";
import ModalThemDV from "./ModalThemDV/index";
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];
const FormItem = Form.Item;
class ModalPhong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleDatPhong: false
      //visibleSuaLoaiPhong: false,
      //dataSualoaiphong: {TenLoai:'',DonGia:0},
    };
  }

  columns = [
    {
      title: "Tên Dịch vụ",
      dataIndex: "DichVu",
      key: "DichVu"
    },
    {
      title: "Số Lượng",
      dataIndex: "SoLuong",
      key: "SoLuong"
    },
    {
      title: "Ngày Sử Dụng Dịch Vụ",
      dataIndex: "NgayGoiDV",
      key: "NgayGoiDV"
    }
  ];

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    this.props.reset("them-loai-phong");
  };
  render() {
    const { visible, onCancel, dataPhong, datphongbyphong } = this.props;
    console.log("ModalPhong :", this.props);
    return (
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : "None"}
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
        width="80rem"
      >
        <Row>
          <Col span={24}>
            {datphongbyphong.data != null ? (
              //     <Table
              //     loading={datphongbyphong.isFetching}
              //     columns={this.columns}
              //     dataSource={datphongbyphong.listloaiPhong}
              //     rowKey="_id"
              //     pagination={{ pageSize: 5 }}
              //     {...this.props}
              //  />

              <div>
                {datphongbyphong.data.length != 0 ? (
                  <div>
                    Khách hàng : {datphongbyphong.data.KhachHang.HoTen}
                    <hr />
                    Ngày Đến : {datphongbyphong.data.NgayDen}
                    <hr />
                    Ngày Đi : {datphongbyphong.data.NgayDi}
                    <hr />
                    ThanhToán : {datphongbyphong.data.DaThanhToan}
                    <hr />
                    Đặt Cọc : {datphongbyphong.data.DatCoc}
                    <hr />
                    Chi Tiết Dịch Vụ
                    <br />
                    <Col>
                      <Button
                        type="primary"
                        onClick={this.onToggleModal}
                        style={{ float: "right", marginBottom: 10 }}
                      >
                        <Icon type="file-add" />
                      </Button>
                    </Col>
                    <Table
                      loading={datphongbyphong.isFetching}
                      columns={this.columns}
                      dataSource={datphongbyphong.data.ChiTietSuDungDichVu}
                      rowKey="_id"
                      pagination={{ pageSize: 5 }}
                      {...this.props}
                    />
                  </div>
                ) : (
                  <div>Phòng trống</div>
                )}
              </div>
            ) : (
              <Spin />
            )}
          </Col>
        </Row>

        <ModalThemDV
          visible={this.visibleDatPhong}
          showModal={this.showModal}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          {...this.props}
        />
      </Modal>
    );
  }
}

export default ModalPhong;
