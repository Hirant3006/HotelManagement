import React, { PureComponent } from "react";
import { Card, Icon } from "antd";
import styles from "./CardList.less";
export default class CustomCard extends PureComponent {

  render() {
    const { data,onOpenModal } = this.props ;
    console.log(this.props);
    return (
      <Card
        hoverable
        className={styles.card}
        onClick={() => {
          onOpenModal(data);
        }}
      >
        <Card.Meta
          avatar={
            data.TrangThai === true ?
            <Icon type="book" style={{ fontSize: "32px", color: "#5BBD2B" }} /> :
            <Icon type="book" style={{ fontSize: "32px", color: "#C82E31" }} />
          }
          title={data.SoPhong}
          description={data.LoaiPhong[0].TenLoaiPhong}
         />
      </Card>
       );
  }
}
