import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput'
import validate from './validate'
const FormItem = Form.Item;


class ModalThemPhong extends React.Component {
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

  handleThemPhong = (values,onCancel) => {
    console.log(values);
    const { addPhongRequest,getListPhongRequest } = this.props;
    const Tang = values.Tang;
    const SoPhong = values.SoPhong;
    const LoaiPhong = values.LoaiPhong;
    const ChiTietThietBi = values.ChiTietThietBi;
    addPhongRequest(Tang,SoPhong,LoaiPhong,ChiTietThietBi,onCancel,getListPhongRequest);
  };

  render() {
    const { handleSubmit, visible, onCancel, addphong} = this.props;
    return (
      <Modal
        title="Tạo  phòng "
        visible={visible}
        onCancel={() => 
          {
          onCancel();   
        }}
       // footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleThemPhong(values,onCancel))}
        >
          <FormItem label="Tầng" {...this.formItemLayout}>
            <Field
              name="Tang"
              type="text"
              component={CustomInput}
              placeholder="Nhập Tầng"
            />
          </FormItem>

          <FormItem label="Số Phòng" {...this.formItemLayout}>
            <Field
              name="SoPhong"
              type="number"
              component={CustomInput}
              placeholder="Nhập số phòng"
            />
          </FormItem>

           <FormItem label="Loại Phòng" {...this.formItemLayout}>
            <Field
              name="LoaiPhong"
              type="text"
              component={CustomInput}
              placeholder="Nhập loại phòng"
            />
          </FormItem>

          <FormItem label="Chi Tiết TB" {...this.formItemLayout}>
            <Field
              name="ChiTietThietBi"
              type="text"
              component={CustomInput}
              placeholder="Nhập Chi Tiết TB"
            />
          </FormItem>

          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addphong.isFetching} // true
              disabled={addphong.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThemPhong= reduxForm({
  form: "them-phong", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(ModalThemPhong);

export default ModalThemPhong;
