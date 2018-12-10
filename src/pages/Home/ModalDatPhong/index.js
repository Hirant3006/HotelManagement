import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select } from "antd";
import CustomInput from "../../../component/CustomInput";
import validate from "./validate";
const FormItem = Form.Item;

class ModalDatPhong extends React.Component {
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

  handleDatPhong = (values, onCancel) => {
    // console.log(values);
    // const { addLoaiPhongRequest,getListLoaiPhongRequest } = this.props;
    // const TenLoai = values.tenloai;
    // const DonGia = values.dongia;
    // addLoaiPhongRequest(TenLoai,DonGia,onCancel,getListLoaiPhongRequest);
  };

  handleRenderSelectKhachHang = data =>
    data.map(item => {
      <Select.Option value={item._id}>{item.HoTen}</Select.Option>;
    });

  render() {
    const {
      handleSubmit,
      visible,
      onCancel,
      addloaiphong,
      khachhang
    } = this.props;
    console.log("Modal dat phong ", this.props);
    return (
      <Modal
        title="Đặt phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values =>
            this.handleSuaLoaiPhong(values, onCancel)
          )}
        >
          <FormItem label="Khách hàng" {...this.formItemLayout}>
            <Select
              style={{ width: 120 }}
              //   onChange={handleChange}s
            >
              {khachhang.listKhachhang.length != 0
                ? this.handleRenderSelectKhachHang(khachhang.listKhachhang)
                : null}
            </Select>
          </FormItem>

          <FormItem label="Đơn giá" {...this.formItemLayout}>
            <Field
              name="dongia"
              type="number"
              component={CustomInput}
              placeholder="Nhập dơn giá"
            />
          </FormItem>
          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              //   loading={addloaiphong.isFetching} // true
              //   disabled={addloaiphong.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalDatPhong = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalDatPhong);

export default ModalDatPhong;
