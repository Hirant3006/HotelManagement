import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form ,Select} from "antd";
import CustomInput from '../../../../component/CustomInput'
import validate from './validate'
const FormItem = Form.Item;


class ModalThemPhong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiPhong: "",
    };
  }
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

  handleThemPhong = (values) => {
    console.log(values);
    const { addPhongRequest,getListPhongRequest,onCancel } = this.props;
    const Tang = values.Tang;
    const SoPhong = values.SoPhong;
    const LoaiPhong = this.state.LoaiPhong;
    addPhongRequest(Tang,SoPhong,LoaiPhong,onCancel,getListPhongRequest);
  };

  handleChangeLoaiPhong = value => {
    this.setState({ LoaiPhong: value });
  };


  handleRenderSelectLoaiPhong = data =>
    data.map(item => {
      return (
        <Select.Option name="TenLoaiPhong" value={item._id}>
          {item.TenLoaiPhong}
        </Select.Option>
      );
    });


  render() {
    const { handleSubmit, visible, onCancel, addphong,loaiphong} = this.props;
    return (
      <Modal
        title="Tạo phòng "
        visible={visible}
        onCancel={() => 
          {
          onCancel();   
        }}
       footer={null}
      >
        <Form
          onSubmit={handleSubmit(values => this.handleThemPhong(values))}
        >
          <FormItem label="Tầng" {...this.formItemLayout}>
            <Field
              name="Tang"
              component={CustomInput}
              placeholder="Nhập Tầng"
            />
          </FormItem>

          <FormItem label="Số Phòng" {...this.formItemLayout}>
            <Field
              name="SoPhong"
              component={CustomInput}
              placeholder="Nhập số phòng"
            />
          </FormItem>

           <FormItem label="Loại Phòng" {...this.formItemLayout}>
           <Select
              name="LoaiPhong"
              style={{ width: 200 }}
              onChange={this.handleChangeLoaiPhong}
            >
              {loaiphong.listloaiPhong.length > 0
                ? this.handleRenderSelectLoaiPhong(loaiphong.listloaiPhong)
                : console.log("Không có list")}
            </Select>
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
