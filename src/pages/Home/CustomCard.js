import React, { PureComponent } from "react";
import { Card, Icon } from "antd";
import styles from "./CardList.less";

export default class CustomCard extends PureComponent {

  render() {
    return (
      <Card
        hoverable
        className={styles.card}
      >
        <Card.Meta
          avatar={
            this.props.status === true ?
            <Icon type="book" style={{ fontSize: "32px", color: "#5BBD2B" }} /> :
            <Icon type="book" style={{ fontSize: "32px", color: "#C82E31" }} />
          }
          title={this.props.title}
          description={this.props.description}
         />
      </Card>
       );
  }
}
