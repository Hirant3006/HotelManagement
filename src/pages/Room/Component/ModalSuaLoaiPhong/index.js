import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form } from "antd";
import CustomInput from '../../../../component/CustomInput'
import validate from './validate'

const FormItem = Form.Item;


class ModalSuaLoaiPhong extends React.Component {
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

  handleSuaLoaiPhong = (values,id,onCancel) => {
    const { updateLoaiPhongTheoIdRequest } = this.props;
    const TenLoai = values.tenloai;
    const DonGia = values.dongia;
    updateLoaiPhongTheoIdRequest(id,TenLoai,DonGia,onCancel);
  };

  render() {
    const { handleSubmit, visible, onCancel, addloaiphong,data } = this.props;
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
          onSubmit={handleSubmit(values => this.handleSuaLoaiPhong(values,data._id,onCancel))}
        >
          <FormItem label="Tên loại phòng" {...this.formItemLayout}>
            <Field
              name="tenloai"
              type="text"
              component={CustomInput}
              placeholder={data!=null?data.TenLoai:null}
            />
          </FormItem>

          <FormItem label="Đơn giá" {...this.formItemLayout}>
            <Field
              name="dongia"
              type="number"
              component={CustomInput}
              placeholder={data!=null?data.DonGia:null}
            />
          </FormItem>
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

ModalSuaLoaiPhong= reduxForm({
  form: "sua-loai-phong", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true,
  // initialValues: {
  //   tenloai:this.props.data.TenLoai,
  // }
})(ModalSuaLoaiPhong);

export default ModalSuaLoaiPhong;
