import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput'
import validate from './validate'

const FormItem = Form.Item;


class ModalSuaLoaiKhachHang extends React.Component {
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

  handleSuaLoaiKhachHang = (values,id,onCancel) => {
    const { updateLoaiKHRequest  } = this.props;
    const TenLoaiKhach = values.TenLoaiKhach;
    updateLoaiKHRequest(id,TenLoaiKhach,onCancel);
  };

  render() {
    const { handleSubmit, visible, onCancel, addloaikhachhang ,data } = this.props;
    return (
      <Modal
        title="Sửa loại phòng"
        visible={visible}
        onCancel={() => 
          {
          onCancel();
       
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleSuaLoaiKhachHang(values,data._id,onCancel))}
        >
          <FormItem label="Tên loạikhách hàng" {...this.formItemLayout}>
            <Field
              name="TenLoaiKhach"
              type="text"
              component={CustomInput}
              placeholder={data!=null?data.TenLoaiKhach:null}
            />
          </FormItem>

         
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

ModalSuaLoaiKhachHang= reduxForm({
  form: "sua-loai-khachhang", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true,
  // initialValues: {
  //   tenloai:this.props.data.TenLoai,
  // }
})(ModalSuaLoaiKhachHang);

export default ModalSuaLoaiKhachHang;
