import React from "react";
import { Modal, Col, Row,List,Avatar,Spin } from "antd";
import datphong from "../../../reducers/datphong";

const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];

class ModalPhong extends React.Component {
  render() {
    const { visible, onCancel, dataPhong,datphongbyphong } = this.props;
    console.log("ModalPhong :", this.props);;
    return (
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : "None"}
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
        width="80rem"
      >
        <Row>
          <Col span={18}>
            {!datphongbyphong.isFetching ? (
              <div>
                Data cần điền ở đây 
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

export default ModalPhong;
