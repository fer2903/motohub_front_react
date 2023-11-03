import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './multiForm.css';
import { Card } from 'antd';
import DriverForm from './DriverForm/DriverForm'
import EmergencyContact from './EmergencyContact/EmergencyContact'
import User from './User/User'
import MedicalInformation from './MedicalInformation/MedicalInformation'

const tabListNoTitle = [
  {
    key: 'personal_data',
    tab: 'Datos personales',
  },
  {
    key: 'salud',
    tab: 'Datos de salud',
  },
  {
    key: 'emergency_contact',
    tab: 'Contactos de emergencia',
  },
  {
    key: 'user',
    tab: 'Datos de acceso',
  },
];

const contentListNoTitle = {
  personal_data: <DriverForm />,
  salud: <MedicalInformation />,
  emergency_contact: <EmergencyContact />,
  user: <User />,
};

const MultiForm = () =>  {
  const [state, setState] = useState({
    key: 'tab1',
    noTitleKey: 'app',
  });

const onTabChange = (key, type) => {
    console.log(key, type);
    
    setState(prevState => {
      return { ...prevState, [type]: key }
    });
  };

  return (
    <>

      <Card
        style={{ width: '100%' }}
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

export default MultiForm
