import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomTable from './CustomTable'
import { Table, Divider, Tag } from "antd";
import { getListPhongRequest } from '../../actions/phong'
import { getListDVRequest } from '../../actions/dichvu'

const columns = [
    {
      title: "TenLoai",
      dataIndex: "TenLoai",
      key: "name",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "DonGia",
      dataIndex: "DonGia",
      key: "age"
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address"
    // },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => (
    //         <Tag color="blue" key={tag}>
    //           {tag}
    //         </Tag>
    //       ))}
    //     </span>
    //   )
    // },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a href="javascript:;">Edit</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )
    }
  ];
  
   

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
}
  componentDidMount() {
    console.log('component did mount')
    this.props.getListPhongRequest();
   
}
    render() {
      console.log(this.props.phong);
        return (
            <div>
                {this.props.phong ? <CustomTable isFetching={this.props.phong.isFetching} data={this.props.phong.listPhong} columns={columns}/> :null } 
            </div>
        );
    }
}
const mapStateToProps = state => {
  return { 
      phong: state.phong.phong,
      dichvu:state.dichvu.dichvu
  }
}

const mapDispatchToProps = {
  getListPhongRequest, getListDVRequest
}

export default connect(mapStateToProps,mapDispatchToProps)(index)
