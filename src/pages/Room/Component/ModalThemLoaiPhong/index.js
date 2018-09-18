import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput'
const FormItem = Form.Item;

const validate = values => {
  const errors = {};
  if (!values.tenloai) {
    errors.tenloai = "Không được bỏ trống ô này";
  } else if (values.tenloai.length > 15) {
    errors.tenloai = "Must be 15 characters or less";
  }
  if (!values.dongia) {
    errors.dongia = "Không được bỏ trống ô này";
  } else if (isNaN(Number(values.dongia))) {
    errors.dongia = "Đơn giá phải là một con số";
  }
  return errors;
};

class ModalThemLoaiPhong extends React.Component {
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

  handleThemLoaiPhong = (values,onCancel) => {
    console.log(values);
    const { addLoaiPhongRequest,getListLoaiPhongRequest } = this.props;
    const TenLoai = values.tenloai;
    const DonGia = values.dongia;
    addLoaiPhongRequest(TenLoai,DonGia,onCancel,getListLoaiPhongRequest);
  };

  render() {
    console.log(this.props);
    const { handleSubmit, visible, onCancel, addloaiphong } = this.props;

    return (
      <Modal
        title="Tạo loại phòng "
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(values => this.handleThemLoaiPhong(values,onCancel))}
        >
          <FormItem label="Tên loại phòng" {...this.formItemLayout}>
            <Field
              name="tenloai"
              type="text"
              component={CustomInput}
              placeholder="Nhập tên loại phòng"
            />
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
              loading={addloaiphong.isFetching} // true
              disabled={addloaiphong.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(ModalThemLoaiPhong);
