import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select, message } from "antd";
import validate from "./validate";
import CustomInput from "../../../../component/CustomInput";

const FormItem = Form.Item;

class ModalThemDV extends React.Component {
  constructor(props) {
    super(props);
    this.state = { DichVu: "" };
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
  handleRenderSelectDichvu = data =>
    data.map(item => {
      return (
        <Select.Option name="DichVu" value={item._id}>
          {item.TenDV}
        </Select.Option>
      );
    });

  handleChangeDichVu = value => {
    this.setState({ DichVu: value });
    console.log(value);
  };

  handleThemDichVu = value => {
    const {addDichVuByPhongRequest,datphongbyphong,onCancelDichVu,getDatPhongByPhongRequest} = this.props;
    const MaDatPhong = datphongbyphong.data._id;
    addDichVuByPhongRequest(MaDatPhong,this.state.DichVu,value.SoLuong,onCancelDichVu,datphongbyphong,getDatPhongByPhongRequest)
  }

  render() {
    const {
      handleSubmit,
      thanhtoan,
      dichvu,
      visibledichvu,
      onCancelDichVu
    } = this.props;
    console.log("Modal thanh toan ", this.props);

    return (
      <Modal
        title="Thêm dịch vụ"
        visible={visibledichvu}
        onCancel={() => {
          onCancelDichVu();
        }}
        footer={null}
      >
        <Form onSubmit={handleSubmit(values => this.handleThemDichVu(values))}>
          <FormItem label="Dịch vụ" {...this.formItemLayout}>
            <Select
              name="DichVu"
              style={{ width: 200 }}
              onChange={this.handleChangeDichVu}
            >
              {dichvu.listDV.length > 0
                ? this.handleRenderSelectDichvu(dichvu.listDV)
                : console.log("Không có list")}
            </Select>
          </FormItem>
          <FormItem label="Số lượng" {...this.formItemLayout}>
            <Field
              name="SoLuong"
              component={CustomInput}
              placeholder="Số lượng"
            />
          </FormItem>
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              //   loading={adddatphong.isFetching} // true
              //   disabled={adddatphong.isFetching}
            >
              Thêm
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalThemDV = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalThemDV);

export default ModalThemDV;
