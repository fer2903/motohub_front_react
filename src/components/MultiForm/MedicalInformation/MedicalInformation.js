
import React, { useState } from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';
import { Form, Input, Select, Modal, Button } from 'antd';

const { Option } = Select;

const MedicalInformation = () => {

  const onFinish = params => {
    axios.post(`http://localhost:3000/api/v1/medical_informations`,
      {
        params
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

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Número de seguridad social">
        <Form.Item
          name="nss"
          noStyle
          rules={[{ required: true, message: 'El nss es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Nss" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Tipo de sangre">
        <Form.Item
          name="blood_type"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Tipo de sangre" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Alergias">
        <Form.Item
          name="allergies"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Escriba las alergias" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Es donador?">
        <Form.Item
          name='donor'
          noStyle
        >
          <Select placeholder="Seleccione una opcion" style={{ width: 163 }}>
            <Option value="true">Si</Option>
            <Option value="false">No</Option>
          </Select>
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
export default MedicalInformation
