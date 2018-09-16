import React,{Component} from "react";
import "antd/dist/antd.css";
import { Table} from "antd";


export default class CustomTable extends Component {
  render() {
    return (
      <div>
        <Table columns={this.props.columns} dataSource={this.props.data} />
      </div>
    );
  }
}
