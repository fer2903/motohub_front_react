import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { WarningOutlined } from "@ant-design/icons";
//import Motorcycle from '../MultiForm/Motorcycle/Motorcycle';

const ModalReport = ({ result })  => {

  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  return (
    <>
      <WarningOutlined key="report" onClick={() => showModal()} />
      <Modal
        title="Reportar Motocicleta"
        visible={visible}
        onCancel={() => handleCancel()}
      >

      </Modal>
    </>
  )
}
export default ModalReport
