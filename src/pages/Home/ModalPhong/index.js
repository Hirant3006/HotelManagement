import React from "react";
import { Modal, Col, Row,List,Avatar } from "antd";

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
    const { visible, onCancel, dataPhong } = this.props;
    console.log("ModalPhong", dataPhong);
    return (
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : "None"}
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        <Row>
          <Col span={18}>
            {dataPhong != null ? (
              <div>
                <b>Tầng :</b> {dataPhong.Tang[0].TenTang}
                <b style={{ marginLeft: "2rem" }}>Loại phòng :</b>{" "}
                {dataPhong.LoaiPhong[0].TenLoaiPhong}
                <br />
              </div>
            ) : (
              "Không có dữ liệu"
            )}
          </Col>
          <Col span={6}>Hello</Col>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        ,
      </Modal>
    );
  }
}

export default ModalPhong;
