import React,{Component} from "react";
import "antd/dist/antd.css";
// import "./index.css";
import ShowModal from '../../component/Modal/ShowModal'
import { Table} from "antd";


export default class CustomTable extends Component {
  render() {
    return (
      <div>
        <Table columns={this.props.columns} dataSource={this.props.data} />
        <ShowModal/>
      </div>
    );
  }
}
