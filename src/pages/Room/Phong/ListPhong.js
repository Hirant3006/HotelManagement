import React, { PureComponent } from "react";
import { Card, List } from "antd";
import CustomCard from "./CustomCard";


export default class ListPhong extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.p)
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
        dataSource={this.props.phong.listPhong}
        renderItem={item => (
          <List.Item>
              <CustomCard status={item.TrangThai} title={item.TenPhong} description={item.TenLoaiPhong}/>
          </List.Item>
        )}
      />
    );
  }
}
