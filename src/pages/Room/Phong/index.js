import React from "react";
import { Row, Col, Spin, Select, Button } from "antd";
import ListPhong from "./ListPhong";

const Option = Select.Option;

export default class Phong extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Phong: []
    };
  }

  handleChange = value => {
    let listphongfilter = this.state.Phong;
    listphongfilter=listphongfilter.filter(phong => phong.TenLoaiPhong === value);
    console.log(listphongfilter)
    this.setState=({Phong:listphongfilter})
  };

  render() {
    this.props.phong
      ? this.setState({ Phong: this.props.phong.listPhong })
      : null;
    return (
      <Col span={18}>
        <Row>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select room type"
            optionFilterProp="children"
            onChange={this.handleChange}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.props.loaiphong.listloaiPhong
              ? this.props.loaiphong.listloaiPhong.map(loaiphong => {
                  return (
                    <Option key={loaiphong._id} value={loaiphong._id}>
                      {loaiphong.TenLoai}
                    </Option>
                  );
                })
              : null}
            {/* <Option value="jack">Phòng đơn</Option>
              <Option value="lucy">Phòng đôi</Option>
              <Option value="tom">Phòng vip</Option> */}
          </Select>
          <Button style={{ float: "right" }} type="primary">
            Đặt phòng
          </Button>
        </Row>
        ,
        {this.props.phong.isFetching ? (
          <Row
            style={{
              // marginTop: "50px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8em"
            }}
          >
            <Spin />
          </Row>
        ) : (
          <ListPhong dataSource={this.state.Phong} {...this.props} />
        )}
      </Col>
    );
  }
}
