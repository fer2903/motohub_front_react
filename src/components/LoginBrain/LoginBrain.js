import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Card, Form, Input, Button, Modal } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import AppBrain from '../../AppBrain'
import axios from 'axios'
import Logo from '../../motohub_1.png'

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

const tabListNoTitle = [
  {
    key: 'sign_up',
    tab: 'Registrarse',
  },
  {
    key: 'sign_in',
    tab: 'Iniciar Sessión',
  },
];

const LoginBrain = () => {

  const [state, setState] = useState({
    key: 'tab1',
    noTitleKey: 'sign_in',
  });

  const [show, setShow] = useState()

  const onFinish = user => {
    axios.post(`http://localhost:3000/api/v1/registrations`,
       {
         user
       }
     )
       .then(res => {
         if (res.data.is_success) {
           setShow(true)
         } else {
           Modal.warning({
             title: 'Oops! ',
             content: (
               <div>
                 <p>Verifique sus datos</p>
               </div>
             ),
             onOk() { },
           });
         }
       })
       .catch(error => {
         console.log(error)
       })
  };

  const onFinishSignIn = user => {
     axios.post(`http://localhost:3000/api/v1/sessions`,
      {
        user
      }
    )
      .then(res => {
        if(res.data.is_success){
          setShow(true)
        }else{
        Modal.warning({
          title: 'Oops! ',
          content: (
            <div>
              <p>Verifique sus datos de acceso</p>
            </div>
          ),
          onOk() { },
        });}
      })
      .catch(error => {
        console.log(error)
      })
  };

  const contentListNoTitle = {
    sign_up: <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={Logo}
        />
      }
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
        <Form.Item
          label="Password"
          name="password_confirmation"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
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

    </Card>,
    sign_in: <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={Logo}
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
        onFinish={onFinishSignIn}
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

    </Card>,

  };


  const onTabChange = (key, type) => {
    console.log(key, type);

    setState(prevState => {
      return { ...prevState, [type]: key }
    });
  };

  if(show){
    return(
      <>
        <AppBrain/>
      </>
    )
  }else{
    return (
      <>
        <Card
          style={{ width: '100%', alignItems: 'center' }}
          tabList={tabListNoTitle}
          activeTabKey={state.noTitleKey}
          onTabChange={key => {
            onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[state.noTitleKey]}
        </Card>
      </>
    )
  }
}

export default LoginBrain
