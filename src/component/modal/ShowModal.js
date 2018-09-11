import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Modal, Button } from 'antd';

export default class ShowModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add Customer
        </Button>
        <Modal
          title="Basic Modal"
         visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
           <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}



