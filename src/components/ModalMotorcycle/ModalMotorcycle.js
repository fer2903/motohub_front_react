import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import Motorcycle from '../MultiForm/Motorcycle/Motorcycle';

const ModalMotorcycle = () =>{
  
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => { // agregar la ruta 
    console.log(e);
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  return(
    <>
      <Button style={{ background: "#800000", borderColor: "#004700"}} type="primary" size="large" shape="circle" onClick={() => showModal()}>
        +
      </Button>
      <Modal
        title="Agregar Motocicleta"
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
      >
        <Motorcycle/>
      </Modal>
    </>
  )
}
export default ModalMotorcycle
