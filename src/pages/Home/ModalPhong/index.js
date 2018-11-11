import React from "react";
import { Modal } from 'antd';

class ModalPhong extends React.Component {
  render() {
    const {visible,onCancel} = this.props;
    console.log('ModalPhong')
    console.log(this.props);
    return (
      <Modal
        title="Chỉnh sửa loại phòng"
        visible={visible}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
      >
        hello
      </Modal>
    );
  }
}

export default ModalPhong;
