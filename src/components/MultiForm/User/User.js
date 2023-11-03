import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Modal } from 'antd';
import axios from 'axios';

const User = () => {

  const onFinish = values => {
    axios.patch(`http://localhost:3000/api/v1/users`,
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

  return (
    <Form name="user-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="email">
        <Form.Item
          name="email"
          noStyle
          rules={[{ required: true, message: 'El email es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Email" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Contraseña">
        <Form.Item
          name="password"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Contraseña" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button style={{ background: "#800000", borderColor: "#004700" }} type="primary" shape="round" htmlType="submit">
          Actualizar
        </Button>
      </Form.Item>
    </Form>
  )
}
export default User
