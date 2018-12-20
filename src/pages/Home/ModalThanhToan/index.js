import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select, message } from "antd";
import CustomInput from "../../../component/CustomInput";
import CustomDatePicker from "../../../component/CustomDatePicker";
import validate from "./validate";

const FormItem = Form.Item;

class ModalThanhToan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  handleThanhToan = () => {
    const {
      addThanhToanRequest,
      datphongbyphong,
      thanhtoan,
      onCancelThanhToan,
      getListPhongRequest,
      onCancel,
    } = this.props;
    const MaDatPhong = datphongbyphong.data._id;
    const TongTienThu = thanhtoan.data.TongTien;
    const TienDichVu = thanhtoan.data.GiaDichVu;
    const TienPhong = thanhtoan.data.GiaPhong;
    const TienDaTra = thanhtoan.data.TongTien;

    addThanhToanRequest(
      MaDatPhong,
      TongTienThu,
      TienDichVu,
      TienPhong,
      TienDaTra,
      onCancelThanhToan,
      getListPhongRequest,
      onCancel,
    );
  };
  render() {
    const {
      handleSubmit,
      thanhtoan,
      visiblethanhtoan,
      onCancelThanhToan
    } = this.props;
    console.log("Modal thanh toan ", this.props);

    return (
      <Modal
        title="Thanh toán"
        visible={visiblethanhtoan}
        onCancel={() => {
          onCancelThanhToan();
        }}
        footer={null}
      >
        <Form onSubmit={handleSubmit(values => this.handleThanhToan(values))}>
          {thanhtoan.data != null ? (
            <div>
              <FormItem label="Ngày ở :" {...this.formItemLayout}>
                {thanhtoan.data.NgayO} ngày
              </FormItem>

              <FormItem label="Giá phòng :" {...this.formItemLayout}>
                {thanhtoan.data.GiaPhong} VNĐ
              </FormItem>

              <FormItem label="Giá dịch vụ :" {...this.formItemLayout}>
                {thanhtoan.data.GiaDichVu} VNĐ
              </FormItem>

              <FormItem label="Thuế :" {...this.formItemLayout}>
                5 %
              </FormItem>

              <FormItem label="Tổng tiền :" {...this.formItemLayout}>
                {thanhtoan.data.TongTien} VNĐ
              </FormItem>
            </div>
          ) : null}
          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              //   loading={adddatphong.isFetching} // true
              //   disabled={adddatphong.isFetching}
            >
              Thanh toán
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThanhToan = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalThanhToan);

export default ModalThanhToan;
