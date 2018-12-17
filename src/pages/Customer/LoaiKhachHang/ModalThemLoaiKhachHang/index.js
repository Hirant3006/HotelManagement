import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput/index'
import validate from './validate'

const FormItem = Form.Item;
class ModalThemLoaiKhachHang extends React.Component {
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

  handleThemLoaiKH = (values,onCancel) => {
    console.log(values);
    const { addLoaiKHRequest,getListLoaiKhachHangRequest } = this.props;
    const TenLoaiKhach = values.TenLoaiKhach;
    addLoaiKHRequest(TenLoaiKhach,onCancel,getListLoaiKhachHangRequest);
  };

  render() {
    const { handleSubmit, visible, onCancel, addloaikhachhang,data } = this.props;
    return (
      <Modal
        title="Tạo loại khách hàng "
        visible={visible}
        onCancel={() => 
          {
          onCancel();   
        }}
     //   footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleThemLoaiKH(values,onCancel))}
        >
          <FormItem label="Tên loại khách hàng" {...this.formItemLayout}>
            <Field
              name="TenLoaiKhach"
              type="text"
              component={CustomInput}
              placeholder="Nhập tên loại KH"
            />
          </FormItem>

      
          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addloaikhachhang.isFetching} // true
              disabled={addloaikhachhang.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThemLoaiKhachHang= reduxForm({
  form: "them-loai-khachhang", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true,
  // initialValues: {
  //   tenloai:this.props.data.TenLoai,
  // }
})(ModalThemLoaiKhachHang);

export default ModalThemLoaiKhachHang;
