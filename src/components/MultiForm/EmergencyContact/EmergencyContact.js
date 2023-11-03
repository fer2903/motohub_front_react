
import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Select, Tooltip, Button, Modal } from 'antd';
import axios from 'axios';

const { Option } = Select;

const EmergencyContact = () =>{

  const onFinish = values => {
    axios.post(`http://localhost:3000/api/v1/emergency_contacts`,
      {
        params: { values }
      }
    )
      .then(res => {
        Modal.success({
          title: 'Se creo con exito ',
          content: (
            <div>
              <p>La información se agrego con exito</p>
            </div>
          ),
          onOk() { },
        });
      })
      .catch(error => {
        Modal.error({
          title: 'Error al crear',
          content: (
            <div>
              <p>Error al crear intentelo mas tarde</p>
            </div>
          ),
          onOk() { },
        });
      })
  };

  return(
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Nombre">
        <Form.Item
          name="name"
          noStyle
          rules={[{ required: true, message: 'El nombre es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Nombre" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Parentesco">
          <Form.Item
            name={['relationship']}
            noStyle
            rules={[{ required: true, message: 'Este atributo es requerido' }]}
          >
          <Select placeholder="Seleccione una opcion" style={{ width: 163 }}>
              <Option value="father">Padre</Option>
              <Option value="mother">Madre</Option>
              <Option value="son">Hijo</Option>
              <Option value="sister">Hermana</Option>
              <Option value="brother">Hermano</Option>
              <Option value="other">Otro</Option>
            </Select>
          </Form.Item>
      </Form.Item>
      <Form.Item label="Número telefónico">
        <Form.Item
          name="cel"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Número de telefono" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button style={{ background: "#800000", borderColor: "#004700" }} type="primary" shape="round" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
  )
}
export default EmergencyContact
