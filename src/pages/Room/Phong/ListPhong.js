import React from "react";
import CustomCard from "./CustomCard";
import { List } from "antd";

export default class ListPhong extends React.Component {
  _handleRenderCard = data => {
    data.map(item => {
      console.log({ item });
      return (
        <CustomCard
          status={item.TrangThai}
          title={item.SoPhong}
          description={item.LoaiPhong.TenLoaiPhong}
        />
      );
    });
  };

  render() {
    console.log(this.props.dataSource);
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
          dataSource={this.props.dataSource}
          renderItem={item => (
            <List.Item>
              <CustomCard
                status={item.TrangThai}
                title={item.SoPhong}
                description={item.LoaiPhong.TenLoaiPhong}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
