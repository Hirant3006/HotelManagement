import React from "react";
import moment from "moment";
import ModalThanhToan from "../ModalThanhToan";
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
  Icon,
  Popconfirm
} from "antd";
import datphong from "../../../reducers/datphong";
import { Form as ReduxForm, Field, reduxForm } from "redux-form";
import CustomInput from "../../../component/CustomInput";
import ModalThemDV from "./ModalThemDV";
import TagThemDichVu from "./TagThemDichVu";
const FormItem = Form.Item;
class ModalPhong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDichVu: false,
      visible: false,
      visibleDatPhong: false,
      visibleModalThanhToan: false
    };
  }

  columns = [
    {
      title: "Tên Dịch vụ",
      dataIndex: "TenDichVu",
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
      key: "NgayGoiDV",
      render: value => {
        var Ngay = new Date(value);
        Ngay = moment(Ngay).format("DD-MM-YYYY");
        return Ngay;
      }
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

  handleOkThemDV = e => {
    this.setState({
      visibleDichVu: false
    });
  };

  handleCancelThemDV = e => {
    this.setState({
      visibleDichVu: false
    });
    this.props.reset("them-dichvu");
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
  };

  onToggleModalThemDichVuOpen = () => {
    console.log("Ontoggle them dich vu");
    this.setState({
      visibleDichVu: true
    });
  };

  onToggleModalThemDichVuClose = () => {
    this.setState({
      visibleDichVu: false
    });
  };

  ontoggleModalThanhToanOpen = () => {
    const { datphongbyphong, getThanhToanByDatPhongRequest } = this.props;
    getThanhToanByDatPhongRequest(datphongbyphong.data._id);
    this.setState({
      visibleModalThanhToan: true
    });
  };

  ontoggleModalThanhToanClose = () => {
    this.setState({
      visibleModalThanhToan: false
    });
  };

  handleCheckout = () => {
    const {
      datphongbyphong,
      onCancel,
      getListPhongRequest,
      checkoutDatPhongRequest
    } = this.props;
    checkoutDatPhongRequest(
      datphongbyphong.data._id,
      onCancel,
      getListPhongRequest
    );
  };

  handleCheckIn = () => {
    const {
      datphongbyphong,
      onCancel,
      getListPhongRequest,
      checkinDatPhongRequest,
      dataPhong
    } = this.props;
    checkinDatPhongRequest(
      datphongbyphong.data._id,
      onCancel,
      getListPhongRequest,
      dataPhong
    );
  };

  render() {
    const {
      visible,
      onCancel,
      dataPhong,
      datphongbyphong,
      visibleDichVu,
      getThanhToanByDatPhongRequest,
      checkoutdatphong
    } = this.props;
    var NgayCheckin = "";
    console.log("ModalPhong :", this.props);
    if (datphongbyphong.data != null) {
      var NgayDen = new Date(datphongbyphong.data.NgayDen);
      console.log(NgayDen);
      var NgayDi = new Date(datphongbyphong.data.NgayDi);
      NgayDen = moment(NgayDen).format("DD-MM-YYYY");
      NgayDi = moment(NgayDi).format("DD-MM-YYYY");
    }
    return (
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : dataPhong}
        visible={visible}
        //visibleDichVu={visibleDichVu }
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
                    {datphongbyphong.data.PhieuThanhToan.length === 0 ? (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          width: "6rem"
                        }}
                        onClick={this.ontoggleModalThanhToanOpen}
                      >
                        Thanh toán
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          width: "6rem",
                          color:"green"
                        }}
                        disabled={true}
                        // ghost={true}
                      >
                        Thanh toán
                      </Button>
                    )}
                    {datphongbyphong.data.Checkin === null ? (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          marginRight: "0.5rem",
                          width: "6rem"
                        }}
                        onClick={this.handleCheckIn}
                        loading={this.props.checkindatphong.isFetching}
                        disabled={this.props.checkindatphong.isFetching}                      
                      >
                        Check in
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          marginRight: "0.5rem",
                          width: "6rem",
                          color:"green"
                        }}
                        disabled={true}
                        // ghost={true}
                      >
                        Check in
                      </Button>
                    )}
                    {datphongbyphong.data.Checkin !== null &&
                    datphongbyphong.data.PhieuThanhToan.length !== 0 ? (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          marginRight: "0.5rem",
                          width: "6rem"
                        }}
                        onClick={this.handleCheckout}
                        loading={this.props.checkoutdatphong.isFetching}
                        disabled={this.props.checkoutdatphong.isFetching}
                      >
                        Checkout
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        style={{
                          float: "right",
                          marginBottom: "0.5rem",
                          marginRight: "0.5rem",
                          width: "6rem"
                        }}
                        disabled={true}
                      >
                        Checkout
                      </Button>
                    )}
                    Khách hàng : {datphongbyphong.data.KhachHang.HoTen}
                    <hr />
                    Ngày Đến : {NgayDen}
                    <hr />
                    Ngày Đi : {NgayDi}
                    <hr />
                    Ngày Checkin :
                    {datphongbyphong.data.Checkin !== null
                      ? moment(new Date(datphongbyphong.data.Checkin)).format(
                          "DD-MM-YYYY HH:mm"
                        )
                      : <p style={{color:"red"}}>        Chưa check in</p>}
                    <hr />
                    Đặt Cọc : {datphongbyphong.data.DatCoc}
                    <hr />
                    Chi Tiết Dịch Vụ
                    <Button
                      type="primary"
                      style={{
                        float: "right",
                        marginBottom: "0.5rem",
                        width: "6rem"
                      }}
                      onClick={this.onToggleModalThemDichVuOpen}
                    >
                      DV mới
                    </Button>
                    <br />
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
        <ModalThanhToan
          visiblethanhtoan={this.state.visibleModalThanhToan}
          showModalThanhToan={this.ontoggleModalThanhToanOpen}
          onCancelThanhToan={this.ontoggleModalThanhToanClose}
          {...this.props}
        />
        <ModalThemDV
          visibledichvu={this.state.visibleDichVu}
          onCancelDichVu={this.onToggleModalThemDichVuClose}
          showModalDichVu={this.onToggleModalThemDichVuOpen}
          {...this.props}
        />
      </Modal>
    );
  }
}

export default ModalPhong;
