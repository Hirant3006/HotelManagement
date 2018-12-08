import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CustomCard from "./CustomCard";
import { List, Col, Row, Button } from "antd";
import { getListPhongRequest } from "../../actions/phong";

class Repair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillmount() {
    console.log('component will mount !!!')
  }

  componentDidMount() {
    console.log('component will did mount !!!')
  }

  componentWillReceiveProps(prespros,nextpros) {
    console.log('Prespros :' + prespros);
    console.log('Nextpros :' )
  }

  render() {
    console.log('render !!!!');
    return (
      <Button
        type="primary"
        htmlType="submit"
        className="button"
        // loading={addloaiphong.isFetching} // true
        // disabled={addloaiphong.isFetching}
      >
        Tạo
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    loaiphong: state.loaiphong.loaiphong,
    // loaiphong: state.phong.loaiphongtheoid,
    deleteloaiphong: state.loaiphong.deleteloaiphong,
    updateloaiphong: state.loaiphong.updateloaiphong
  };
};

const mapDispatchToProps = {
  getListPhongRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repair);
