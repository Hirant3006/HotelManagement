import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput/index'
import validate from './validate'

const FormItem = Form.Item;
class ModalThemLoaiThietBi extends React.Component {
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

  handleThemLoaiTB = (values,onCancel) => {
    console.log(values);
    const { addLoaiTB,getListLoaiTBRequest } = this.props;
    const TenLoaiTB = values.TenLoaiTB;
    addLoaiTB(TenLoaiTB,onCancel,getListLoaiTBRequest);
  };

  render() {
    const { handleSubmit, visible, onCancel, addLoaiTB,data } = this.props;
    return (
      <Modal
        title="TThêm loại thiết bị "
        visible={visible}
        onCancel={() => 
          {
          onCancel();   
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleThemLoaiTB(values,onCancel))}
        >
          <FormItem label="Tên loại thiết bị" {...this.formItemLayout}>
            <Field
              name="TenLoaiTB"
              type="text"
              component={CustomInput}
              placeholder="Nhập tên loại TB"
            />
          </FormItem>

      
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addLoaiTB.isFetching} // true
              disabled={addLoaiTB.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThemLoaiThietBi= reduxForm({
  form: "them-loai-khachhang", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true,
  // initialValues: {
  //   tenloai:this.props.data.TenLoai,
  // }
})(ModalThemLoaiThietBi);

export default ModalThemLoaiThietBi;
