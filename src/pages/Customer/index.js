import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomTable from './CustomTable'
import { Table, Divider, Tag } from "antd";

const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
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
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];
  

export default class index extends Component {
    render() {
        return (
            <div>
                <CustomTable data={data} columns={columns}/>
            </div>
        );
    }
}

