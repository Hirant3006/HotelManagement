import React from "react";
import { Form as ReduxForm, Field, reduxForm } from "redux-form";
import { Form, Row, Button, Modal } from "antd";
import CustomInput from "../../../../component/CustomInput";

import validate from "./validate";

const FormItem = Form.Item;

class ModalSuaPhong extends React.Component {
  state = {
    disabled: true
  };

  editPosition = ({ name }) => {
    const { editPositionRequest, data } = this.props;
    const { onToggleModalClose } = this.props;
    editPositionRequest({ data, name, callback: () => onToggleModalClose() });
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

    const {
      visible,
      onCancel,
      data,
      handleSubmit
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
          <FormItem label="Số phòng " {...this.formItemLayout}>
            <Field
              name="loaiphong"
              component={CustomInput}
              placeholder="Nhập số phòng"
              defaultValue={data.TenLoai}
            />
          </FormItem>

          <FormItem label="Tầng" {...this.formItemLayout}>
            <Field
              name="tang"
              component={CustomInput}
							placeholder="Tầng"
              type="number"							
              defaultValue={data.DonGia}
            />
          </FormItem>

          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              //   loading={editPositionStatus.isFetching()} // true
              //   disabled={editPositionStatus.isFetching()}
            >
              Lưu
            </Button>
          </Row>
        </ReduxForm>
      </Modal>
    );
  }
}

ModalSuaPhong = reduxForm({
  form: "edit-loaiphong",
  validate,
  forceUnregisterOnUnmount: true
})(ModalSuaPhong);

export default ModalSuaPhong;
