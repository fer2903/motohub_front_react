import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import FormEdit from './FormEdit/FormEdit'
//import Motorcycle from '../MultiForm/Motorcycle/Motorcycle';

const ModalEdit = ({ result }) => {

  const [visible, setVisible] = useState(false)

  const showModal = ()  => {
    setVisible(true)
  };


  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  return (
    <>
      <EditOutlined key="edit" onClick={() => showModal()} />
      <Modal
        title="Editar"
        visible={visible}
        onCancel={() => handleCancel()}
      >
        <FormEdit moto_data={result}/>
      </Modal>
    </>
  )
}
export default ModalEdit
