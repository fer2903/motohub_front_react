import React, { useState } from 'react'
import FirstView from './components/FirstView'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import MultiForm from './components/MultiForm/multiForm'
import UserMotorcycle from './components/UserMotorcycle/UserMotorcycle'
import ModalMotorcycle from './components/ModalMotorcycle/ModalMotorcycle';
import logo from './motohub_1.png'

const { Header, Content, Footer } = Layout;

function AppBrain() {
  const [show, setShow] = useState(<FirstView/>)
  const [logged, setLogged] = useState(false)

  const login = (value) =>{
    setLogged(value)
  } 

  function updateShow(value){
      switch (value.key) {
        case "1":
          setShow(<FirstView />)
          break;
        case "2":
          setShow(<UserMotorcycle />)
          break;
        case "3":
          setShow(<MultiForm />)
          break;
        case "4":
          setShow(<MultiForm />)
          break;
      }
    }

    return (

      <Layout className="layout">
        <Header src={{logo}}>
          <Menu theme="dark" mode="horizontal" onClick={(e) => updateShow(e)} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">Mis motos</Menu.Item>
            <Menu.Item key="3">Mis datos</Menu.Item>
            <Menu.Item key="4" style={{ float: 'right' }} >Salir</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {show}
          </div>
        </Content>
        <div className="centrado"><ModalMotorcycle /></div>
        <Footer style={{ textAlign: 'center' }}> Motohub ©2020</Footer>
      </Layout>
    );
  }

export default AppBrain
