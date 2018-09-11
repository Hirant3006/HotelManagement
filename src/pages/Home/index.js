import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getListPhongRequest } from "../../actions/phong";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getListPhongRequest();
  }
  render() {
    console.log(this.props);
    return <div>Homepages</div>;
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
)(Home);
