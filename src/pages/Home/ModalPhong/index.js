import React from "react";
import { Form,Modal, Col, Row,List,Avatar,Spin,Table, Button, Icon} from "antd";
import datphong from "../../../reducers/datphong";
import { Form as ReduxForm, Field, reduxForm  } from "redux-form";
import CustomInput from "../../../component/CustomInput";
import ModalThemDV from "./ModalThemDV"
import TagThemDichVu from "./TagThemDichVu"
const FormItem = Form.Item;
class ModalPhong extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleDatPhong:false,
      visibleDichVu: false,
      //visibleSuaLoaiPhong: false,
      //dataSualoaiphong: {TenLoai:'',DonGia:0},
    };
  }

  columns = [
    {
      title: "Tên Dịch vụ",
      dataIndex: "DichVu",
      key: "DichVu"
    },
    {
      title: "Số Lượng",
      dataIndex: "SoLuong",
      key: "SoLuong"
    },
    {
      title: "Ngày Sử Dụng Dịch Vụ",
      dataIndex: "NgayGoiDV",
      key: "NgayGoiDV"
    },
    
  ]

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
    this.props.reset('them-loai-phong')
  };

  handleOkThemDV = e => {
    this.setState({
      visibleDichVu: false
    });
  };

  handleCancelThemDV = e => {
    this.setState({
      visibleDichVu: false
    });
    this.props.reset('them-dichvu')
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
 };

   onToggleModalThemDV = e => {
     this.setState({visibleDichVu: !this.state.visibleDichVu });
  };
 
  render() {
    const { visible, onCancel, dataPhong,datphongbyphong,visibleDichVu } = this.props;
    console.log("ModalPhong :", this.props);
    return (
      
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong: dataPhong }
        visible={visible}
        //visibleDichVu={visibleDichVu }
        onCancel={() => {
          onCancel();
        }}
       // footer={null}
        width="80rem"
      >
           <Row>        
          <Col span={24}>
            {datphongbyphong.data!=null ? (
       
        <div>
              Khách hàng : {datphongbyphong.data.KhachHang.HoTen}
              <hr/>
              Ngày Đến : {datphongbyphong.data.NgayDen}
              <hr/>
              Ngày Đi : {datphongbyphong.data.NgayDi}
              <hr/>
              ThanhToán : {datphongbyphong.data.DaThanhToan} 
              <hr/>
              Đặt Cọc : {datphongbyphong.data.DatCoc} 
              <hr/>
              Chi Tiết Dịch Vụ
              <br/>
          

          <Col >
          <Button
            type="primary"
            onClick={() => this.onToggleModalThemDV}
            style={{ float: "right", marginBottom: 10 }}
          >
            <Icon type="file-add" />
            </Button>
         
 
        </Col>
        <Table
          loading={datphongbyphong.isFetching}
          columns={this.columns}
          dataSource={datphongbyphong.data.ChiTietSuDungDichVu}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
          />
 
 <TagThemDichVu/>


        </div>
                    ) : (
              <Spin/>
            )}
          </Col>
        </Row>
        {/* <ModalThemDV
    visible={this.visibleDichVu}
    onCancel={this.handleCancelThemDV}
    onOk={this.handleOkThemDV}
    {...this.props}
  /> */}
     </Modal>
        
       
         
    );
  //   <ModalThemDV
  //   visible={this.visibleDichVu}
  //   onCancel={this.handleCancelThemDV}
  //   onOk={this.handleOkThemDV}
  //   {...this.props}
  // />
  }
}

export default ModalPhong;