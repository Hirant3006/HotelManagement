import React from "react";
import {
  Row,
  Col,
  Spin,
  Select,
  Button,
  Icon,
  Table,
  Divider,
  Popconfirm
} from "antd";
import ListPhong from "./ListPhong";
import { connect } from "react-redux";
import Phong from "../Phong";
import ModalThemPhong from "./ModalThemPhong";
import { getListPhongRequest } from "../../../actions/phong";
const Option = Select.Option;

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Phong: [],
      visibleModalThemPhong: false
    };
  }

  columns = [
    {
      title: "Tầng",
      dataIndex: "Tang",
      key: "Tang"
    },
    {
      title: "Số Phòng",
      dataIndex: "SoPhong",
      key: "_id"
    },
    {
      title: "Loại Phòng",
      dataIndex: "LoaiPhong.TenLoaiPhong",
      key: "SoPhong"
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />
          {this.props.deleteloaiphong.isFetching ? (
            <Icon type="loading" />
          ) : (
            <Popconfirm
              title="Bạn có chắc muốn xóa phòng này?"
              onConfirm={() => this.handleDeletePhong(record)}
              okText="Có"
              cancelText="Không"
            >
              <a style={{ color: "red" }}>Xóa</a>
            </Popconfirm>
          )}
        </span>
      )
    }
  ];

  handleDeletePhong = value => {
    const {deletePhongTheoIdRequest,getListPhongRequest} = this.props;
    // const id = record._id;

    deletePhongTheoIdRequest(value._id,getListPhongRequest);
  }

  handleChange = value => {
    let listphongfilter = this.state.Phong;
    listphongfilter = listphongfilter.filter(
      phong => phong.TenLoaiPhong === value
    );
    console.log(listphongfilter);
    this.setState = { Phong: listphongfilter };
  };

  onToggleModalThemPhongOpen = e => {
    this.setState({ visibleModalThemPhong: true });
  };

  onToggleModalThemPhongClose = e => {
    this.setState({ visibleModalThemPhong: false });
  };

  onToggleModalSuaPhongOpen = e => {
    this.setState({ visibleModalSuaPhong: true });
  };

  onToggleModalSuaPhongClose = e => {
    this.setState({ visibleModalSuaPhong: false });
  };

  render() {
    // this.props.phong
    //   ? this.setState({ Phong: this.props.phong.listPhong })
    //   : null;
    console.log(this.props);
    const { listLoaiPhong, loaiphong, phong } = this.props;
    return (
      <div>
        <Row>
          <Button
            type="primary"
            onClick={this.onToggleModalThemPhongOpen}
            style={{ float: "right", marginBottom: 10 }}
          >
            <Icon type="file-add" />
          </Button>
        </Row>
        <Row>
          <Table
            loading={phong.isFetching}
            columns={this.columns}
            dataSource={phong.listPhong}
            rowKey="_id"
            pagination={{ pageSize: 5 }}
            {...this.props}
          />
          <ModalThemPhong
            visible={this.state.visibleModalThemPhong}
            // showModal={this.showModal}
            onCancel={this.onToggleModalThemPhongClose}
            // onOk={this.handleOk}
            {...this.props}
          />
          {/* <ModalThemLoaiPhong
          visible={this.state.visible}
          // showModal={this.showModal}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          {...this.props}
        />
        {visibleSuaLoaiPhong ?
        <ModalSuaLoaiPhong
          visible={this.state.visibleSuaLoaiPhong}
          // showModal={this.showModal}
          onCancel={this.handleCancelSuaLoaiPhong}
          onOk={this.handleOkSuaLoaiPhong}
          data={this.state.dataSualoaiphong}
          {...this.props}
        /> : null } */}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    //loaiphong: state.loaiphong.loaiphong,
    //  khachhang: state.khachhang.khachhang,
    // loaiphong: state.phong.loaiphongtheoid,
    //addphong: state.khachhang.addkhachhang,
    addphong: state.phong.addphong
  };
};
const mapDispatchToProps = {
  getListPhongRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
