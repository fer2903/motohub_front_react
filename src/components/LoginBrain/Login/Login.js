import React from 'react'
import { Card, Avatar, Form, Input, Button, Modal} from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import axios from 'axios'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const { Meta } = Card;
const Login = () => {
  const onFinish = user => {
    axios.post(`http://localhost:3000/api/v1/sessions`,
      {
        user
      }
    )
      .then(res => {
        Modal.success({
          title: 'Acceso on exito! ',
          content: (
            <div>
              <p>Bienvenido</p>
            </div>
          ),
          onOk() { },
        });
      })
      .catch(error => {
        console.log(error)
      })
  };

  return(
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <FacebookOutlined />,
        <GoogleOutlined />
      ]}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Ingresar
        </Button>
        </Form.Item>
      </Form>

    </Card>
  )
}
export default Login