import React from "react";
import { Field, reduxForm } from "redux-form";
<<<<<<< HEAD
import { Modal, Row, Button, Form } from "antd";
import CustomInput from "../../../component/CustomInput";
import RadioItem from "../../../component/radio/RadioItem";
import Calendars from "../../../component/calendar/Calendars";
import validate from "./validate";
// import moment from "moment"
=======
import { Modal, Row, Button, Form} from "antd";
import CustomInput from '../../../component/CustomInput'
import RadioItem from '../../../component/radio/RadioItem'
import Calendars from '../../../component/calendar/Calendars'
import validate from './validate'
import moment from "moment"
>>>>>>> 0812_Van
const FormItem = Form.Item;

class ModalThemKhachHang extends React.Component {
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

<<<<<<< HEAD
  handleThemKhachHang = (values, onCancel) => {
    console.log("Values: ", values);
    const { addKhachHangRequest, getListKhachHangRequest } = this.props;
    const GioiTinh = values.GioiTinh;
=======
  handleThemKhachHang = (values,onCancel) => {

    console.log("Values: ",values);
    const { addKhachHangRequest,getListKhachHangRequest } = this.props;
    const LoaiKhachHang= values.LoaiKhachHang;
>>>>>>> 0812_Van
    const HoTen = values.HoTen;
    const CMND = values.CMND;
    const NgaySinh = values.NgaySinh;
<<<<<<< HEAD
    const DiaChi = values.DiaChi;
    const QuocTich = values.QuocTich;
    const Email = values.Email;
    addKhachHangRequest(
      GioiTinh,
      HoTen,
      CMND,
      NgaySinh,
      DiaChi,
      QuocTich,
      Email,
      onCancel,
      getListKhachHangRequest
    );
=======
 
    addKhachHangRequest(HoTen,CMND,NgaySinh,LoaiKhachHang,onCancel,getListKhachHangRequest);
>>>>>>> 0812_Van
  };

  render() {
    console.log(this.props);
    const { handleSubmit, visible, onCancel, addkhachhang } = this.props;

    return (
      <Modal
        title="Tạo khách hàng "
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
      >
        <form
          onSubmit={handleSubmit(values =>
            this.handleThemKhachHang(values, onCancel)
          )}
        >
<<<<<<< HEAD
          <FormItem label="Giới Tính" {...this.formItemLayout}>
            <RadioItem
              name="GioiTinh"
              type="radio"
              //    value={this.state.isFetching}
              component={RadioItem}
            />
          </FormItem>
=======

         <FormItem label="Loại Khách Hàng" {...this.formItemLayout}>
            <Field
              name="TenLoaiKhach"
              type="text"
              component={CustomInput}
              placeholder="Nhập loại khách hàng"
            />
          </FormItem>

        
>>>>>>> 0812_Van

          <FormItem label="Họ Tên" {...this.formItemLayout}>
            <Field
              name="HoTen"
              type="text"
              component={CustomInput}
              placeholder="Nhập họ tên khách hàng"
            />
          </FormItem>

<<<<<<< HEAD
          <FormItem label="CMND" {...this.formItemLayout}>
=======
  <FormItem label="CMND" {...this.formItemLayout}>
>>>>>>> 0812_Van
            <Field
              name="CMND"
              type="text"
              component={CustomInput}
              placeholder="Nhập số CMND khách hàng"
            />
          </FormItem>

<<<<<<< HEAD
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
              component={Calendars}
              // placeholder="Nhập ngày sinh khách hàng"
            />
          </FormItem>

          <FormItem label="Địa chỉ" {...this.formItemLayout}>
            <Field
              name="DiaChi"
              type="text"
              component={CustomInput}
              placeholder="Nhập địa chỉ khách hàng"
            />
          </FormItem>

          <FormItem label="Quốc Tịch" {...this.formItemLayout}>
            <Field
              name="QuocTich"
              type="text"
              component={CustomInput}
              placeholder="Nhập quốc tịch khách hàng"
            />
          </FormItem>

          {/* <FormItem label="SĐT" {...this.formItemLayout}>
            <Field
              name="SDT"
              type="text"
              component={CustomInput}
              placeholder="Nhập SDT khách hàng"
            />
          </FormItem> */}

          <FormItem label="Email" {...this.formItemLayout}>
            <Field
              name="Email"
              type="text"
              component={CustomInput}
              placeholder="Nhập Email khách hàng"
            />
          </FormItem>

=======
  

          <FormItem label="Ngày Sinh" {...this.formItemLayout}>
            <Field
              name = "NgaySinh"
              type="default"
              component={Calendars}  
             
            />
          </FormItem>

        
        

>>>>>>> 0812_Van
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
  validate // <--- validation function given to redux-form
})(ModalThemKhachHang);
