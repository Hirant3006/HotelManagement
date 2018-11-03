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
    console.log(this.props.data);

    const {
      visible,
      onCancel,
      data,
      editPositionStatus,
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

ModalSuaLoaiPhong = reduxForm({
  form: "edit-loaiphong",
  validate,
  forceUnregisterOnUnmount: true
})(ModalSuaLoaiPhong);

export default ModalSuaLoaiPhong;
