import React, { PureComponent } from "react";
import { Card, Icon } from "antd";
import styles from "./CardList.less";

export default class CustomCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        hoverable
        className={styles.card}
      >
        <Card.Meta
          avatar={
            <Icon type="book" style={{ fontSize: "32px", color: "#F9F400" }} />
          }
          title={this.props.title}
         />
      </Card>
       );
  }
}
