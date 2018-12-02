import React from "react";
import { connect } from "react-redux";
import CustomCard from "./CustomCard";
import { List, Col, Row, Button, Layout, Avatar, Spin } from "antd";
import { getListPhongRequest, pickCardPhong } from "../../actions/phong";
import { getDatPhongByPhongRequest } from "../../actions/datphong";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModalPhong: false
    };
  }

  componentDidMount() {
    console.log("component did mount ");
    this.props.getListPhongRequest();
  }

  ontoggleModalOpen = () => {
    // pickCardPhong(data);
    this.setState({
      visibleModalPhong: true
    });
  };

  ontoggleModalClose = () => {
    this.setState({
      visibleModalPhong: false
    });
  };

  render() {
    const { phong, dataPhong, datphongbyphong } = this.props;
    console.log('Index ',this.props);
    return (
      <div>
        <Row>
          <Col span={18}>
            <Layout.Content
              style={{ height: "100%", padding: "24px 24px 0px 24px" }}
            >
              <div style={{ padding: 24, background: "#fff", height: "25em" }}>
                {dataPhong === null ? (
                  <b>Hotel Management Application 0.1</b>
                ) : (
                  // <div style={{ padding: 24, background: "#fff", height: "auto" }}>
                  <Row>
                    <Col span={18}>
                      {dataPhong != null ? (
                        <div>
                          <b>Tầng :</b> {dataPhong.Tang[0].TenTang}
                          <b style={{ marginLeft: "2rem" }}>
                            Loại phòng :
                          </b>{" "}
                          {/* {dataPhong.LoaiPhong[0].TenLoaiPhong} */}
                          <List
                            title="DS dịch vụ"
                            itemLayout="horizontal"
                            dataSource={datphongbyphong.listdatphong.ChiTietSuDungDichVu}
                            pagination={{
                              onChange: page => {
                                console.log(page);
                              },
                              pageSize: 3
                            }}
                            renderItem={item => (
                              <List.Item>
                                <List.Item.Meta description={item.DichVu[0]} />
                              </List.Item>
                            )}
                          />
                        </div>
                      ) : (
                        "Không có dữ liệu"
                      )}
                    </Col>
                    <Col span={6}>Hello</Col>
                  </Row>
                  // </div>
                )}
              </div>
            </Layout.Content>
          </Col>
          <Col span={6}>
            <Layout.Content
              style={{ height: "100%", padding: "24px 24px 0px 0px" }}
            >
              <div
                style={{ padding: 24, background: "#fff", height: "25em" }}
              >
              Hello
              </div>
            </Layout.Content>
          </Col>
        </Row>
        <Layout.Content
          style={{ height: "100%", padding: "10px 24px 24px 24px" }}
        >
          <div style={{ padding: 24, background: "#fff", height: "auto" }}>
            <Row>
              <Col span={24}>
                {phong.isFetching === true ? (
                  <Spin />
                ) : (
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 2,
                      md: 3,
                      lg: 3,
                      xl: 4,
                      xxl: 3
                    }}
                    dataSource={phong.listPhong}
                    renderItem={item => (
                      <List.Item>
                        <CustomCard
                          data={item}
                          onOpenModal={this.ontoggleModalOpen}
                          {...this.props}
                        />
                      </List.Item>
                    )}
                  />
                )}
              </Col>
              <Col
                span={5}
                style={{
                  textAlign: "center",
                  marginLeft: "1rem",
                  marginRight: "1rem"
                }}
              />
            </Row>
          </div>
        </Layout.Content>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phong: state.phong.phong,
    dataPhong: state.phong.dataPhong,
    datphongbyphong: state.datphong.datphongbyphong
  };
};

const mapDispatchToProps = {
  getListPhongRequest,
  getDatPhongByPhongRequest,
  pickCardPhong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
