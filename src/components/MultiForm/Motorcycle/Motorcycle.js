import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Select, Upload, Button, Checkbox, Modal } from 'antd';
import { InboxOutlined } from "@ant-design/icons";
import axios from 'axios';

const { Option } = Select;

const Motorcycle = () => {
  const [states, setStates] = useState([])
  const [brands, setBrands] = useState([])
  const [statuses, setStatuses] = useState([])
  const [photo, setPhoto] = useState()
//localidad
/*   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/states')
      .then(res => {
        setStates(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 */
//status de la motocicleta
/*   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/statuses')
      .then(res => {
        console.log(res, "respuesta!!!")
        setStatuses(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 */
//marcas
/*   useEffect(() => {
    axios.get('http://localhost:3000/api/v1/brands')
      .then(res => {
        setBrands(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 */
  const normFile = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onFinish = values => {
    axios.post(`http://localhost:3000/api/v1/client_motorcycles`,
      {
        params: { values },
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
      <Form.Item
        name="brand_id"
        label="Marca"
        hasFeedback
      >
        <Select placeholder="Seleccione una marca" style={{ width: 163 }}>
          <Option key="1" value="1">Seleccione</Option>
         {/*  {brands.map((result, i) => (
            <Option key={result.id} value={result.id}>{result.name}</Option>
          ))} */}
        </Select>
      </Form.Item>
      <Form.Item label="Modelo">
        <Form.Item
          name="model"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Año">
        <Form.Item
          name="year"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Numero de serie">
        <Form.Item
          name="serial"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Placas">
        <Form.Item
          name="plates"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Descripciónn">
        <Form.Item
          name="description"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Introduzca la descripción" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Color">
        <Form.Item
          name="color"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Introduzca la descripción" />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="status_id"
        label="Estatus"
        hasFeedback
      >
        <Select placeholder="Seleccione un estatus" style={{ width: 163 }}>
          <Option key="1" value="1">Seleccione</Option>
         {/*  {statuses.map((result, i) => (
            <Option key={result.id} value={result.id}>{result.name}</Option>
          ))} */}
        </Select>
      </Form.Item>
      <Form.Item
        name="state_id"
        label="Estado"
        hasFeedback
      >
        <Select placeholder="Seleccione un estado" style={{ width: 163 }}>
          <Option key="1" value="1">Seleccione</Option>
         {/*  {states.map((result, i) => (
            <Option key={result.id} value={result.id}>{result.name}</Option>
          ))} */}
        </Select>
      </Form.Item>
      <Form.Item label="Kilometraje">
        <Form.Item
          name="mileage"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Introduzca el kilometraje" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Nombre del motoclub">
        <Form.Item
          name="motoclub"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Motoclub" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Numero de motor">
        <Form.Item
          name="engine"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Número de motor" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Numero de factura">
        <Form.Item
          name="invoice_number"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Número de motor" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Cilindrada">
        <Form.Item
          name="cilinder"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="cilindrada" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Aseguradora">
        <Form.Item
          name="insurance"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Aseguradora" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Número de poliza">
        <Form.Item
          name="policy"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="poliza" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Nombre del conductor">
        <Form.Item
          name="driver_name"
          noStyle
        >
          <Input style={{ width: 160 }} placeholder="Nombre" />
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="is_a_driver"
        label="Usted es el conductor"
        hasFeedback
      >
        <Select placeholder="Seleccion una opción" style={{ width: 163 }}>
          <Option value="true">Si</Option>
          <Option value="false">No</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Foto serial">
        <Form.Item
          name="serial_image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <input type="file" accept="image/*" multiple={false} />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Foto del vehiculo">
        <Form.Item
          name="image"
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

export default Motorcycle
