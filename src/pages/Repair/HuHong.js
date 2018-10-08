import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Divider,Button ,Icon,Row } from "antd";
// import ModalThemLoaiPhong from "../Room/Component/ModalThemLoaiPhong";
// import huhong from "../../reducers/huhong";
import CustomerTable from '../Customer/CustomTable'
const columns = [
  {
    title: "Mã Phòng ",
    dataIndex: "MaPhong",
    key: "MaPhong"
  },
  {
    title: "Chi Tiết",
    dataIndex: "ChiTiet",
    key: "ChiTiet"
  },
  {
    title: "Trạng Thái",
    dataIndex: "DaSua",
    key: "DaSua"
  },
  {
    title: " ",
    dataIndex: "_v",
    key: "_v"
  }
];

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
       visible: false }
  }

  handleOk = (e) => {
    console.log('Ok');
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log('Cancel');
    this.setState({
      visible: false,
    });
  }

  onToggleModal = (e) => {
    console.log('Toggle')
		this.setState({ visible: !this.state.visible })
	}
 
  render() {
    const {huhong} = this.props;
    console.log(this.props);
    return (
      <div>
        <Row>
        <Button
          type="primary"
          onClick={this.onToggleModal}
          style={{ float: "right", marginBottom: 10 }}
        >
          <Icon type="file-add" />
        </Button>
        </Row>
        <Row>
        <Table
          loading={huhong.isFetching}
          columns={columns}
          dataSource={huhong.listHuHong}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
          {...this.props}
        />
        <CustomerTable visible={this.state.visible} showModal={this.showModal} onCancel={this.handleCancel} onOk={this.handleOk} {...this.props}/>
        </Row>
      </div>
    );
  }
}
