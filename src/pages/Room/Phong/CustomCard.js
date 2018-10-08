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
        // actions={[<a>操作一</a>, <a>操作二</a>]}
      >
        <Card.Meta
          avatar={
            //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            // <Icon type="lock" style={{ fontSize: '32px',color: '#E33539' }}/>
            // <Icon type="unlock" style={{ fontSize: '32px',color: '#5BBD2B' }}/>
            <Icon type="book" style={{ fontSize: '32px',color: '#F9F400' }}/>            
          }
          title={this.props.title}
          // description={this.props.description}
          // <Ellipsis className={styles.item} lines={3}>
        />
      </Card>
      // <Card style={{backgroundColor:'pink'}}>
      //   <Row>Room Number</Row>
      //   <Row>Status</Row>
      //   </Card>
    );
  }
}
