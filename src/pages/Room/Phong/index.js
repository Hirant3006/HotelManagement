import React, { PureComponent } from "react";
import { Row, Col, Spin, Select, Button } from "antd";
import ListPhong from "./ListPhong";

const Option = Select.Option;

export default class Phong extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.phong ? console.log(this.props.phong) : null;
    return (
        <Col span={18}>
          <Row >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select room type"
              optionFilterProp="children"
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Phòng đơn</Option>
              <Option value="lucy">Phòng đôi</Option>
              <Option value="tom">Phòng vip</Option>
            </Select>
            <Button style={{float:'right'}} type="primary">Đặt phòng</Button>
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
            <ListPhong {...this.props} />
          )}
        </Col>
    );
  }
}
