import React from "react";
import { Form as ReduxForm, Field, reduxForm } from "redux-form";
import { Form, Row, Button, Modal } from "antd";
import CustomInput from "../../../../component/CustomInput";

import validate from "./validate";

const FormItem = Form.Item;

class ModalSuaLoaiPhong extends React.Component {
  state = {
    disabled: true
  };

  editPosition = (values) => {
    const { updateLoaiPhongTheoIdRequest, data ,onCancel} = this.props;
    const { onToggleModalClose } = this.props;
    updateLoaiPhongTheoIdRequest(data._id,values.loaiphong,values.dongia,onCancel);
  };

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
  render() {
    console.log(this.props);
    const {
      visible,
      onCancel,
      data,
      handleSubmit,
      updateloaiphong
    } = this.props;
    return (
      <Modal
        title="Chỉnh sửa loại phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <ReduxForm onSubmit={handleSubmit(values => this.editPosition(values))}>
          <FormItem label="Tên " {...this.formItemLayout}>
            <Field
              name="loaiphong"
              component={CustomInput}
              placeholder="Nhập tên loại phòng"
              defaultValue={data.TenLoai}
            />
          </FormItem>

          <FormItem label="Đơn giá" {...this.formItemLayout}>
            <Field
              name="dongia"
              component={CustomInput}
							placeholder="DonGia"
              type="number"							
              defaultValue={data.DonGia}
            />
          </FormItem>

          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
                loading={updateloaiphong.isFetching} // true
                disabled={updateloaiphong.isFetching}
            >
              Lưu
            </Button>
          </Row>
        </ReduxForm>
      </Modal>
    );
  }
}

ModalSuaLoaiPhong = reduxForm({
  form: "edit-loaiphong",
  validate,
  forceUnregisterOnUnmount: true
})(ModalSuaLoaiPhong);

export default ModalSuaLoaiPhong;
