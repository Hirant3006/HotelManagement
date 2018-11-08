import React from "react";
import { connect } from "react-redux";
import CustomCard from "./CustomCard";
import { List, Col, Row, Button } from "antd";
import { getListPhongRequest } from "../../actions/phong";

class Repair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListPhongRequest();
  }

  render() {
    console.log(this.props.phong);
    return (
      <Row>
        <Col span={18}>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
            dataSource={this.props.phong.listPhong}
            renderItem={item => (
              <List.Item>
                <CustomCard
                  status={item.TrangThai}
                  title={item.SoPhong}
                  description={item.LoaiPhong[0].TenLoaiPhong}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={5} style={{ textAlign: "center" , marginLeft:'1rem' , marginRight:'1rem' }}>
          <Button type="primary" size="large" block>
            Đặt phòng
          </Button>
          <Button type="primary" style={{marginTop:'1rem'}} size="large" block>
            Thanh Toán
          </Button>
          <Button type="primary" style={{marginTop:'1rem'}} size="large" block>
            Dịch vụ
          </Button>
          <Button type="primary" style={{marginTop:'1rem'}} size="large" block>
            Khách hàng
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong
  };
};

const mapDispatchToProps = {
  getListPhongRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repair);
