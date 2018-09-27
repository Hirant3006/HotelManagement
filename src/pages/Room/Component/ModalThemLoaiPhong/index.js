import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput'
import validate from './validate'
const FormItem = Form.Item;


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

  handleSuaLoaiPhong = (values,onCancel) => {
    // const { addLoaiPhongRequest,getListPhongRequest } = this.props;
    // const TenLoai = values.tenloai;
    // const DonGia = values.dongia;
    // addLoaiPhongRequest(TenLoai,DonGia,onCancel,getListPhongRequest);
  };

  render() {
    const { handleSubmit, visible, onCancel, addloaiphong} = this.props;

    return (
      <Modal
        title="Tạo loại phòng "
        visible={visible}
        onCancel={() => 
          {
          onCancel();
       
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleSuaLoaiPhong(values,onCancel))}
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
        </Form>
      </Modal>
    );
  }
}

ModalThemLoaiPhong= reduxForm({
  form: "them-loai-phong", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(ModalThemLoaiPhong);

export default ModalThemLoaiPhong;
