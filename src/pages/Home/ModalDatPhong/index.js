import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select } from "antd";
import CustomInput from "../../../component/CustomInput";
import CustomDatePicker from "../../../component/CustomDatePicker";
import validate from "./validate";

const FormItem = Form.Item;

class ModalDatPhong extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      KhachHang: "",
      Phong: "",
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

  handleDatPhong = (values, onCancel) => {
    console.log('Values :',values);
    // const { addLoaiPhongRequest,getListLoaiPhongRequest } = this.props;
    // const TenLoai = values.tenloai;
    // const DonGia = values.dongia;
    // addLoaiPhongRequest(TenLoai,DonGia,onCancel,getListLoaiPhongRequest);
  };

  handleChangeKhachHang = (value) => {
    this.setState({KhachHang:value})
  }

  handleChangePhong = (value) => {
    this.setState({Phong:value})
  }
  
  handleRenderSelectKhachHang = data =>
    data.map(item => {
      console.log("Render item ", item);
      return <Select.Option name="KhachHang" value={item._id}>{item.HoTen}</Select.Option>;
    });

  handleRenderSelectPhong = data =>
    data.map(item => {
      console.log("Render item ", item);
      return <Select.Option name="Phong" value={item._id}>{item.SoPhong}</Select.Option>;
    });

  render() {
    const {
      handleSubmit,
      visible,
      onCancel,
      addloaiphong,
      khachhang,
      phong
    } = this.props;
    console.log("Modal dat phong ", this.props);
    return (
      <Modal
        title="Đặt phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <Form
          onSubmit={handleSubmit(values =>
            this.handleDatPhong(values, onCancel)
          )}
        >
          <FormItem label="Khách hàng" {...this.formItemLayout}>
            <Select
              name="KhachHang"
              style={{ width: 200 }}
              //   onChange={handleChange}s
            >
              {khachhang.listKhachhang.length > 0
                ? this.handleRenderSelectKhachHang(khachhang.listKhachhang)
                : console.log("Không có list")}
            </Select>
          </FormItem>

          <FormItem label="Phòng" {...this.formItemLayout}>
            <Select
              name="Phong"
              style={{ width: 200 }}
              //   onChange={handleChange}s
            >
              {khachhang.listKhachhang.length > 0
                ? this.handleRenderSelectPhong(phong.listPhong)
                : console.log("Không có list")}
            </Select>
          </FormItem>

          <FormItem label="Ngày đến" {...this.formItemLayout}>
            <Field
              name="NgayDen"
              component={CustomDatePicker}
              placeholder="Ngày đến"
            />
          </FormItem>
          <FormItem label="Ngày đi" {...this.formItemLayout}>
            <Field
              name="NgayDi"
              component={CustomDatePicker}
              placeholder="Staff"
            />
          </FormItem>
          <FormItem label="Đặt cọc" {...this.formItemLayout}>
            <Field
              name="DatCoc"
              component={CustomInput}
              placeholder="Tiền cọc"
            />
          </FormItem>

          {/* <Field name="age" type="number" component={renderField} label="Age" /> */}
          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              //   loading={addloaiphong.isFetching} // true
              //   disabled={addloaiphong.isFetching}
            >
              Tạo
            </Button>
          </Row>
        </Form>
      </Modal>
    );
  }
}

ModalDatPhong = reduxForm({
  form: "dat-phong", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(ModalDatPhong);

export default ModalDatPhong;
