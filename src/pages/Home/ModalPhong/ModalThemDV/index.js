import React from "react";
import { Form,Modal, Col, Row,List,Avatar,Spin,Table, Button, Icon} from "antd";
///import datphong from "../../../reducers/datphong";
import { Form as ReduxForm, Field, reduxForm  } from "redux-form";
//import CustomInput from "../../../component/CustomInput";
import { GET_LIST_DICHVU_REQUEST } from "../../../../actions/contstants";
import { getListDVRequest } from "../../../../actions/dichvu";


const FormItem = Form.Item;
class ModalThemDV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
     // visibleDatPhong:false,
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
    this.props.reset('them-dichvu')
  };

  onToggleModal = e => {
    this.setState({ visible: !this.state.visible });
 };

  render() {
    const { visible, onCancel, dataPhong, dataDV ,dichvu,datphongbyphong } = this.props;
    //console.log("ModalDV :", this.props);
    console.log("visible :", this.props);
    return (
      
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : "None"}
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
       // footer={null}
        width="80rem"
      >
           <Row>        
          <Col span={24}>
            {datphongbyphong.data!=null ?(
       
        <div>Dịch Vụ
               <Table
            loading={dichvu.isFetching}
            columns={this.columns}
            dataSource={dichvu.listDV}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />
          

          <Col >
          <Button
            type="primary"
            onClick={this.onToggleModal}
            style={{ float: "right", marginBottom: 10 }}
          >
            <Icon type="file-add" />
            </Button>
         
 
        </Col>
        {/* <Table
          loading={datphongbyphong.isFetching}
          columns={this.columns}
          dataSource={datphongbyphong.data.ChiTietSuDungDichVu}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
          /> */}
        </div>
                  ) : (
                    <Spin/>
                  )}
          </Col>
        </Row>
     
     </Modal>
        

         
    );
  }
}

export default ModalThemDV;