import React, { PureComponent } from "react";
import { Card, Icon } from "antd";
import styles from "./CardList.less";
export default class CustomCard extends PureComponent {

  handleOnClick = () => {
    console.log('Custom card ',this.props);
    this.props.getDatPhongByPhongRequest(this.props.data._id);
    this.props.pickCardPhong(this.props.data);
    // this.props.onOpenModal();
  }

  render() {
    const { data,onOpenModal } = this.props ;
    console.log("Render ",this.props)
    return (
      <Card
        hoverable
        className={styles.card}
        onClick={() => {
          this.handleOnClick();
        }}
      >
        <Card.Meta
          avatar={
            data.TrangThai === true ?
            <Icon type="book" style={{ fontSize: "32px", color: "#5BBD2B" }} /> :
            <Icon type="book" style={{ fontSize: "32px", color: "#C82E31" }} />
          }
          title={data.SoPhong}
          // description={data!==null ? data.LoaiPhong[0].TenLoaiPhong :null}
         />
      </Card>
       );
  }
}
