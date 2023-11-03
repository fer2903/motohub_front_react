import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { TagOutlined } from "@ant-design/icons";
//import Motorcycle from '../MultiForm/Motorcycle/Motorcycle';

const ModalStatus = ({ result }) => {

  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = e => {
    setVisible(false)
  };

  return (
    <>
      <TagOutlined key="status" onClick={() => showModal()} />
      <Modal
        title="Cambiar Status"
        visible={visible}
        onCancel={() => handleCancel()}
      >

      </Modal>
    </>
  )
}
export default ModalStatus
