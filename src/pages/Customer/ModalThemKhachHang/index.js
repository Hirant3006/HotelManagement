import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Row, Button, Form} from "antd";
import CustomInput from '../../../component/CustomInput'
import RadioItem from '../../../component/radio/RadioItem'
import Calendars from '../../../component/calendar/Calendars'
import validate from './validate'
import moment from "moment"
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

  handleThemKhachHang = (values,onCancel) => {

    console.log("Values: ",values);
    const { addKhachHangRequest,getListKhachHangRequest } = this.props;
    const LoaiKhachHang= values.LoaiKhachHang;
    const HoTen = values.HoTen;
    const CMND = values.CMND;    
    const NgaySinh = values.NgaySinh;
 
    addKhachHangRequest(HoTen,CMND,NgaySinh,LoaiKhachHang,onCancel,getListKhachHangRequest);
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
          onSubmit={handleSubmit(values => this.handleThemKhachHang(values,onCancel))}
        >

         <FormItem label="Loại Khách Hàng" {...this.formItemLayout}>
            <Field
              name="TenLoaiKhach"
              type="text"
              component={CustomInput}
              placeholder="Nhập loại khách hàng"
            />
          </FormItem>

        

          <FormItem label="Họ Tên" {...this.formItemLayout}>
            <Field
              name="HoTen"
              type="text"
              component={CustomInput}
              placeholder="Nhập họ tên khách hàng"
            />
          </FormItem>

  <FormItem label="CMND" {...this.formItemLayout}>
            <Field
              name="CMND"
              type="text"
              component={CustomInput}
              placeholder="Nhập số CMND khách hàng"
            />
          </FormItem>

  

          <FormItem label="Ngày Sinh" {...this.formItemLayout}>
            <Field
              name = "NgaySinh"
              type="default"
              component={Calendars}  
             
            />
          </FormItem>

        
        

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
})(ModalThemKhachHang);
