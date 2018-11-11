import React from "react";
import { connect } from "react-redux";
import CustomCard from "./CustomCard";
import { List, Col, Row, Button } from "antd";
import { getListPhongRequest,pickCardPhong } from "../../actions/phong";
import ModalPhong from "./ModalPhong";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false
    };
  }

  componentDidMount() {
    this.props.getListPhongRequest();
  }

  ontoggleModalOpen = data => {
    console.log({data});
    console.log('hello')
    // pickCardPhong(data);
    this.setState({
      visibleModalPhong: true
    });

  };

  ontoggleModalClose = () => {
    this.setState ({
      visibleModalPhong: false
    });
  };

  render() {
    const { phong } = this.props;
    return (
      <div>
        <Row>
          <Col span={18}>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 3 }}
              dataSource={this.props.phong.listPhong}
              renderItem={item => (
                <List.Item>
                  <CustomCard
                    data={item}
                    onOpenModal={this.ontoggleModalOpen}
                    {...this.props}
                    // status={item.TrangThai}
                    // title={item.SoPhong}
                    // description={item.LoaiPhong[0].TenLoaiPhong}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col
            span={5}
            style={{
              textAlign: "center",
              marginLeft: "1rem",
              marginRight: "1rem"
            }}
          >
            <Button type="primary" size="large" block>
              Đặt phòng
            </Button>
            <Button
              type="primary"
              style={{ marginTop: "1rem" }}
              size="large"
              block
            >
              Thanh Toán
            </Button>
            <Button
              type="primary"
              style={{ marginTop: "1rem" }}
              size="large"
              block
            >
              Dịch vụ
            </Button>
            <Button
              type="primary"
              style={{ marginTop: "1rem" }}
              size="large"
              block
            >
              Khách hàng
            </Button>
          </Col>
        </Row>
        <ModalPhong
          visible={this.state.visibleModalPhong}
          onCancel={this.ontoggleModalClose}
          onOpen={this.ontoggleModalOpen}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    dataCardPhong: state.phong.dataPhongforCard
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  pickCardPhong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
