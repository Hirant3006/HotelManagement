import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../component/CustomInput'
import validate from './validate'
const FormItem = Form.Item;


class ModalThemHuHong extends React.Component {
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

  handleThemHuHong = (values,onCancel) => {
    console.log(values);
    const { addHuHongRequest,getListHuHongRequest } = this.props;
    const MaPhong = values.MaPhong;
    const ChiTiet = values.ChiTiet;
    const DaSua = values.DaSua
    addHuHongRequest(MaPhong,ChiTiet,DaSua,onCancel,getListHuHongRequest);
  };

  render() {
    const { handleSubmit, visible, onCancel, addHuHong} = this.props;

    return (
      <Modal
        title="Tạo Hư Hỏng"
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
          <FormItem label=" Mã Phòng" {...this.formItemLayout}>
            <Field
              name="MaPhong"
              type="text"
              component={CustomInput}
              placeholder="Nhập mã phòng"
            />
          </FormItem>

          <FormItem label="Chi Tiết" {...this.formItemLayout}>
            <Field
              name="ChiTiet"
              type="text"
              component={CustomInput}
              placeholder="Nhập chi tiết"
            />
          </FormItem>


         
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addHuHong.isFetching} // true
              disabled={addHuHong.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThemHuHong= reduxForm({
  form: "them-huhong", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(ModalThemHuHong);

export default ModalThemHuHong;
