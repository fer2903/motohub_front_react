import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Select, Upload, Button, Modal } from 'antd';
import { InboxOutlined } from "@ant-design/icons";
import axios from 'axios';

const { Option } = Select;

const DriverForm = () => {
  const [results, setResults] = useState([])
  const [photo, setPhoto] = useState()

 /*  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/states')
      .then(res => {
        if (res.data.lenght > 0){
          setResults(res.data)
        }else{
          setResults({id:"", name:"Seleccione una opción"})
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, []) */

  const normFile = (e) => {
    console.log("Upload event:", e.target.files[0]);

    //if (Array.isArray(e)) {
      //return e;
    //}
    setPhoto(e.target.files[0]);
    //return e && e.fileList;
  };

  const onFinish = values => {
    axios.post(`http://localhost:3000/api/v1/user_informations`,
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
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Nombre completo">
        <Form.Item
          name="full_name"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Apellido">
        <Form.Item
          name="last_name"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Direccion">
        <Form.Item
          name="address"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="state_id"
        label="Selecione el estado"
        hasFeedback
      >
        <Select placeholder="Please select a country" style={{width:163}}>
          <Option key="1" value="1">Seleccione</Option>
          {/* {results.map(result => (
            <Option value={result.id}>{result.name}</Option>
          ))} */}
        </Select>
      </Form.Item>
      <Form.Item label="Nombre del motoclub">
        <Form.Item
          name="motoclub"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Foto de perfil">
        <Form.Item
          name="photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <input type="file" accept="image/*" multiple={false} />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button style={{ background: "#800000", borderColor: "#004700" }} type="primary" shape="round" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DriverForm
