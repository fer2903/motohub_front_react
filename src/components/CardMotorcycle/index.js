import React from 'react'
import { Card } from "antd";
import ModalEdit from './ModalEdit/ModalEdit'
import ModalReport from './ModalReport/ModalReport'
import ModalStatus from './ModalStatus/ModalStatus'
import 'antd/dist/antd.css';

const { Meta } = Card;

const CardMotorcycle = ({ result }) =>{

  return (
    <div className="result">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            width='240'
            height="350"
            alt="example"
            src={result.image}
          />
        }
        actions={[
          <ModalEdit result={result}/>,
          <ModalStatus result={result}/>,
          <ModalReport result={result}/>

        ]}
      >
        <Meta title={result.serial} description={result.plates} />
      </Card>
    </div>
  )
}

export default CardMotorcycle
