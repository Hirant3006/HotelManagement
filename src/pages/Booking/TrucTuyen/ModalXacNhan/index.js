import React from "react";
import moment from "moment";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select, message, Spin } from "antd";
import validate from "./validate";
import CustomInput from "../../../../component/CustomInput";

const FormItem = Form.Item;

class ModalXacNhan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { DichVu: "" };
  }

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };

  handleXacNhan = value => {
    const {
      comfirmBookingRequest,
      data,
      onCancel,
      getDatPhongOnlineRequest
    } = this.props;

    comfirmBookingRequest(
      data._id,
      parseInt(value.tiencoc),
      onCancel,
      getDatPhongOnlineRequest
    );
  };

  render() {
    const {
      handleSubmit,
      data,
      visible,
      onCancel,
      phongbyid,
      confirmbooking
    } = this.props;
    console.log("Modal Xác Nhận ", this.props);
    return (
      <Modal
        title="Xác nhận đặt phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        {data != null ? (
          <Form onSubmit={handleSubmit(values => this.handleXacNhan(values))}>
            <FormItem label="Họ tên" {...this.formItemLayout}>
              {data.HoTen}
            </FormItem>
            <FormItem label="Email" {...this.formItemLayout}>
              {data.Email}
            </FormItem>
            <FormItem label="SDT " {...this.formItemLayout}>
              {data.SoDienThoai}
            </FormItem>
            <FormItem label="Số phòng" {...this.formItemLayout}>
              {phongbyid.phong != null ? phongbyid.phong.SoPhong : <Spin />}
            </FormItem>
            <FormItem label="Ngày đến" {...this.formItemLayout}>
              {moment(data.NgayDen).format("DD-MM-YYYY")}
            </FormItem>

            <FormItem label="Ngày đi" {...this.formItemLayout}>
              {moment(data.NgayDi).format("DD-MM-YYYY")}
            </FormItem>
            <FormItem label="Đặt cọc" {...this.formItemLayout}>
              <Field
                name="tiencoc"
                component={CustomInput}
                placeholder="Điền số tiền đặt cọc"
              />
            </FormItem>
            <Row type="flex" justify="end">
              <Button
                type="primary"
                htmlType="submit"
                className="button"
                loading={confirmbooking.isFetching} // true
                disabled={confirmbooking.isFetching}
              >
                Xác nhận
              </Button>
            </Row>
          </Form>
        ) : null}
      </Modal>
    );
  }
}

ModalXacNhan = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalXacNhan);

export default ModalXacNhan;
