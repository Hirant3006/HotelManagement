import React from "react";
<<<<<<< HEAD
import { Modal, Col, Row,List,Avatar } from "antd";
=======
import { Modal, Col, Row,List,Avatar,Spin } from "antd";
import datphong from "../../../reducers/datphong";
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c

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
<<<<<<< HEAD
    const { visible, onCancel, dataPhong } = this.props;
    console.log("ModalPhong", dataPhong);
=======
    const { visible, onCancel, dataPhong,datphongbyphong } = this.props;
    console.log("ModalPhong :", this.props);;
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
    return (
      <Modal
        title={dataPhong != null ? dataPhong.SoPhong : "None"}
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
<<<<<<< HEAD
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
=======
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
>>>>>>> c0af9e70f6047743cb8cd00d72abef37b9f3877c
      </Modal>
    );
  }
}

export default ModalPhong;
