import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form, Select,Radio } from "antd";
import CustomInput from "../../../component/CustomInput";
import RadioItem from "../../../component/radio/RadioItem";
import Calendars from "../../../component/calendar/Calendars";
import CustomerDatePicker from "../../../component/CustomDatePicker";
import validate from "./validate";
// import moment from "moment"
const FormItem = Form.Item;

class ModalThemKhachHang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiKhachHang: "",
      GioiTinh: true,
    };
  }

  formItemLayout = {
    labelCol: {
      xs: { span: 30 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };

  onChangeGioiTinh = e => {
    this.setState({GioiTinh:e.target.value})
  }

  handleThemKhachHang = (values, onCancel) => {
    console.log("Values: ", values);
    const { addKhachHangRequest, getListKhachHangRequest } = this.props;
    const GioiTinh = this.state.GioiTinh;
    const HoTen = values.HoTen;
    //const CMND = values.CMND;
    const NgaySinh = values.NgaySinh;
    // const DiaChi = values.DiaChi;
    const QuocTich = values.QuocTich;
    // const Email = values.Email;
    const LoaiKhachHang = this.state.LoaiKhachHang;
    addKhachHangRequest(
    
      HoTen,
      GioiTinh,
      //CMND,
      NgaySinh,
      // DiaChi,
      QuocTich,
      // Email,
      LoaiKhachHang,
      onCancel,
      getListKhachHangRequest
    );
  };

  handleChangeLoaiKhachHang = value => {
    this.setState({ LoaiKhachHang: value });
    console.log(value);
  };

  handleRenderSelectLoaiKhachHang = data =>
    data.map(item => {
      return (
        <Select.Option name="Phong" value={item._id}>
          {item.TenLoaiKhach}
        </Select.Option>
      );
    });

  render() {
    console.log(this.props);
    const {
      handleSubmit,
      visible,
      onCancel,
      addkhachhang,
      loaikhachhang
    } = this.props;

    return (
      <Modal
        title="Tạo khách hàng "
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(values =>
            this.handleThemKhachHang(values, onCancel)
          )}
        >
          <FormItem label="Giới Tính" {...this.formItemLayout}>
            <Radio.Group onChange={this.onChangeGioiTinh} value={this.state.GioiTinh}>
              <Radio value={true}>Nam</Radio>
              <Radio value={false}>Nữ</Radio>
            </Radio.Group>
          </FormItem>

          <FormItem label="Họ Tên" {...this.formItemLayout}>
            <Field
              name="HoTen"
              type="text"
              component={CustomInput}
              placeholder="Nhập họ tên khách hàng"
            />
          </FormItem>

          {/* <FormItem label="Giới Tính" {...this.formItemLayout}>
            <Field
              name="GioiTinh"
              type="text"
              component={CustomInput}
              placeholder="Nhập Giới Tính khách hàng"
            />
          </FormItem> */}

          {/* <FormItem label="Ngày Sinh" {...this.formItemLayout}>
            <Field
              name="NgaySinh"
              type="text"
              component={CustomInput}
              placeholder="Nhập họ tên khách hàng"
            />
          </FormItem> */}

          <FormItem label="Ngày Sinh" {...this.formItemLayout}>
            <Field
              name="NgaySinh"
              type="text"
              component={CustomerDatePicker}
              // placeholder="Nhập ngày sinh khách hàng"
            />
          </FormItem>

          {/* <FormItem label="Địa chỉ" {...this.formItemLayout}>
            <Field
              name="DiaChi"
              type="text"
              component={CustomInput}
              placeholder="Nhập địa chỉ khách hàng"
            />
          </FormItem> */}

          <FormItem label="Quốc Tịch" {...this.formItemLayout}>
            <Field
              name="QuocTich"
              type="text"
              component={CustomInput}
              placeholder="Nhập quốc tịch khách hàng"
            />
          </FormItem>

          <FormItem label="Loại Khách" {...this.formItemLayout}>
            <Select
              name="LoaiKhachHang"
              style={{ width: 200 }}
              onChange={this.handleChangeLoaiKhachHang}
            >
              {loaikhachhang.listLoaiKH.length > 0
                ? this.handleRenderSelectLoaiKhachHang(loaikhachhang.listLoaiKH)
                : console.log("Không có list")}
            </Select>
          </FormItem>

          {/* <FormItem label="Email" {...this.formItemLayout}>
            <Field
              name="Email"
              type="text"
              component={CustomInput}
              placeholder="Nhập Email khách hàng"
            />
          </FormItem> */}

          <Row type="flex" justify="end">
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              loading={addkhachhang.isFetching} // true
              disabled={addkhachhang.isFetching}
            >
              Add
            </Button>
          </Row>
        </form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  forceUnregisterOnUnmount: true
})(ModalThemKhachHang);
