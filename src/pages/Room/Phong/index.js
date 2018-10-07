import React, { PureComponent } from "react";
import { Row, Col, Spin, Select } from "antd";
import ListPhong from "./ListPhong";

const Option = Select.Option;

export default class Phong extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.phong ? console.log(this.props.phong) : null;
    return (
      <Row>
        <Col span={18}>
          <Row style={{ position:'relative'}}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
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
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
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
        <Col span={5} style={{ marginLeft: "20px" }}>
          Hello
        </Col>
      </Row>
    );
  }
}
