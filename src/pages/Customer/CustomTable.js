import React,{Component} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import ShowModal from '../../component/modal/ShowModal'
import { Table, Divider, Tag } from "antd";


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
